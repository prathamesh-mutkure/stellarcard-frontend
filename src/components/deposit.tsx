import type { LiquidationAddress } from "@/types";
import { DollarSign } from "lucide-react";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import * as StellarSdk from "@stellar/stellar-sdk";
import {
  getAddress,
  signTransaction,
  requestAccess,
  setAllowed,
  isAllowed,
} from "@stellar/freighter-api";

// USDC asset details on Stellar
const USDC_ASSET = {
  code: "USDC",
  issuer: "GA5ZSEJYB37JRC5AVCIA5MOP4RHTM335X2KGX3IHOJAPP5RE34K4KZVN", // Circle's USDC issuer
};

function DepositComp({ address }: { address: LiquidationAddress | null }) {
  const [amount, setAmount] = useState("0.1");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isFreighterConnected, setIsFreighterConnected] = useState(false);
  const [userPublicKey, setUserPublicKey] = useState("");

  useEffect(() => {
    checkFreighterConnection();
  }, []);

  const checkFreighterConnection = async () => {
    try {
      let isAppAllowed = await isAllowed();

      if (!isAppAllowed.isAllowed) {
        isAppAllowed = await setAllowed();
      }

      if (isAppAllowed.isAllowed) {
        const { address } = await getAddress();
        setUserPublicKey(address);
        setIsFreighterConnected(true);
      }
    } catch (err) {
      console.log("Freighter not connected");
    }
  };

  const connectFreighter = async () => {
    try {
      setIsLoading(true);
      const isAppAllowed = await isAllowed();

      if (!isAppAllowed.isAllowed) {
        await requestAccess();
      }

      const { address } = await getAddress();
      setUserPublicKey(address);
      setIsFreighterConnected(true);
      setError("");
    } catch (err) {
      setError("Failed to connect to Freighter: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const validateStellarAddress = (address: string) => {
    const stellarRegex = /^G[A-Z2-7]{55}$/;
    return stellarRegex.test(address);
  };

  const handleDeposit = async () => {
    setError("");
    setStatus("");

    if (!isFreighterConnected) {
      await connectFreighter();
    }

    if (!address?.address) {
      console.log("Address is not available");
      return;
    }

    // Validation
    if (!address?.address.trim()) {
      setError("Please enter a recipient address");
      console.log("Recipient address is empty");

      return;
    }

    if (!validateStellarAddress(address.address)) {
      setError("Invalid Stellar address format");
      console.log("Invalid Stellar address format");

      return;
    }

    if (!amount || parseFloat(amount) <= 0) {
      setError("Please enter a valid amount");
      console.log("Invalid amount entered");

      return;
    }

    setIsLoading(true);

    try {
      setStatus("Building transaction...");
      console.log("Building transaction...");

      // This would be the real implementation with Stellar SDK
      const transactionResult = await createUSDCTransaction();

      console.log("Transaction result:", transactionResult);

      setStatus(
        `Transaction successful! Hash: ${transactionResult.hash.substring(
          0,
          8
        )}...`
      );

      // Reset form
      setAmount("");
    } catch (err) {
      setError("Transaction failed: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const createUSDCTransaction = async () => {
    try {
      const server = new StellarSdk.Horizon.Server(
        "https://horizon.stellar.org"
      );
      const sourceAccount = await server.loadAccount(userPublicKey);

      const transaction = new StellarSdk.TransactionBuilder(sourceAccount, {
        fee: StellarSdk.BASE_FEE,
        networkPassphrase: StellarSdk.Networks.PUBLIC,
      })
        .addOperation(
          StellarSdk.Operation.payment({
            destination: address!.address,
            asset: new StellarSdk.Asset(USDC_ASSET.code, USDC_ASSET.issuer),
            amount: amount.toString(),
          })
        )
        .addMemo(
          StellarSdk.Memo.text(address?.blockchain_memo ?? "USDC Deposit")
        )
        .setTimeout(300)
        .build();

      // Convert to XDR for Freighter
      const transactionXDR = transaction.toXDR();

      const signedTransactionXDR = await signTransaction(transactionXDR, {
        networkPassphrase: StellarSdk.Networks.PUBLIC,
      });

      const signedTransaction = StellarSdk.TransactionBuilder.fromXDR(
        signedTransactionXDR.signedTxXdr,
        StellarSdk.Networks.PUBLIC
      );

      const result = await server.submitTransaction(signedTransaction);
      return result;
    } catch (error) {
      console.error("Error creating USDC transaction:", error);
      throw new Error("Failed to create USDC transaction");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center mb-4">
        <DollarSign className="h-6 w-6 text-green-600 mr-2" />
        <h3 className="text-lg font-semibold text-gray-900">Deposit USDC</h3>
      </div>
      <p className="text-gray-600 mb-4">
        Add funds to your account by depositing USDC or XLM stablecoins.
      </p>

      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Current Balance</span>
          <span className="text-lg font-semibold text-gray-900">
            ${"0.00"} USDC
          </span>
        </div>
      </div>

      {address && (
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center overflow-ellipsis overflow-hidden">
            <span className="text-xs font-semibold text-gray-900">
              {address.address}
            </span>
          </div>
        </div>
      )}

      {address?.blockchain_memo && (
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Memo</span>
            <span className="text-lg font-semibold text-gray-900">
              {address?.blockchain_memo}
            </span>
          </div>
        </div>
      )}

      {address && (
        <div className="flex justify-between items-center w-full mx-auto mb-4">
          <QRCode value={address.address} />
        </div>
      )}

      {!isFreighterConnected && (
        <button
          onClick={connectFreighter}
          disabled={!address || isLoading}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
        >
          Connect Wallet
        </button>
      )}

      {isFreighterConnected && (
        <button
          onClick={handleDeposit}
          disabled={!address || isLoading}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
        >
          Deposit Funds
        </button>
      )}
    </div>
  );
}

export default DepositComp;
