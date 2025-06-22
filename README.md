# Stellar Wallet & Credit Card Platform

A comprehensive digital wallet solution that bridges cryptocurrency and traditional payments by allowing users to deposit USDC on Stellar and receive a physical/virtual credit card for worldwide use.

Demo - [stellarcard-frontend.vercel.app](https://stellarcard-frontend.vercel.app/) (Backend not hosted, only for landing page, login won't work for now)

<img width="1624" alt="Screenshot 2025-06-22 at 15 49 49" src="https://github.com/user-attachments/assets/77267299-eea2-4fb3-8b96-9138f472b810" />


## 🌟 Features

### Core Functionality
- **Digital Wallet**: Secure USDC deposits on the Stellar network
- **Credit Card Issuance**: Automatic credit card generation linked to wallet balance
- **Mobile Pay Integration**: Add issued cards directly to Apple Pay and Google Pay
- **Global Acceptance**: Cards work worldwide through Visa/Mastercard networks

### User Experience
- **Simple Onboarding**: Streamlined signup process with integrated KYC
- **Freighter Integration**: Seamless wallet connection for crypto deposits
- **Real-time Balance**: Instant updates between wallet and card spending
- **Cross-platform**: Web application with mobile-optimized design

## 🔧 Technology Stack

### Backend
- **NestJS**: Robust Node.js framework for scalable server-side applications
- **Stellar SDK**: Integration with Stellar blockchain for USDC transactions
- **PostgreSQL/MongoDB**: Secure data storage for user accounts and transactions

### Frontend
- **Vite**: Lightning-fast build tool and development server
- **React**: Modern UI library for responsive user interfaces
- **TypeScript**: Type-safe development for better code quality

### Integrations
- **Freighter Wallet**: Browser extension wallet for Stellar transactions
- **Bridge/Plaid**: Worldwide KYC and identity verification services
- **Card Networks**: Visa and Mastercard payment processing
- **Apple/Google Pay**: Mobile wallet integration APIs

## 🌍 Global Capabilities

### KYC & Compliance
- **Worldwide Support**: KYC verification available in 100+ countries through Bridge and Plaid
- **Regulatory Compliance**: Meets international financial regulations
- **Identity Verification**: Multi-layer verification including document and biometric checks

### Payment Network
- **Visa/Mastercard**: Cards issued on major payment networks
- **Global Acceptance**: Works at millions of merchants worldwide
- **Online & Offline**: Support for both e-commerce and point-of-sale transactions
- **ATM Access**: Cash withdrawal capabilities at supported ATMs

### Mobile Integration
- **Apple Pay**: Native integration with iOS devices and Apple Watch
- **Google Pay**: Seamless Android device compatibility
- **Contactless Payments**: NFC-enabled transactions for enhanced security
- **Digital Wallet Management**: Full card control through mobile apps


## 📱 User Journey

1. **Sign Up**: Create account with email and basic information
2. **KYC Verification**: Complete identity verification through Bridge/Plaid
3. **Wallet Setup**: Connect Freighter wallet or create new Stellar account
4. **Deposit USDC**: Transfer USDC to your Stellar wallet address
5. **Card Issuance**: Automatically receive virtual/physical credit card
6. **Mobile Setup**: Add card to Apple Pay or Google Pay
7. **Start Spending**: Use card worldwide or through mobile payments

----

**Built with ❤️ using Stellar, NestJS, and React**

Customer (Prathamesh)
ID - c474c9bb-d3cf-4c03-bbf5-aa0250c3a625

Liquidation Address (Stellar to sol)
ID - 43730bba-cb59-4475-af68-fcd4027e849a
Address - GD5JCCUM7YXETOTK6SEYU3KXQX5OTHWVFN4SFKGQ5V2KKSYWBZUQWMWT

Wallet (sol)
ID - 01467555-bee1-48c7-ab17-e1a8b808ad19
Address - 6z2i1RTRSYt5egd5UeUjKp7UH9B9LZ2r7r36yrT1iUy2

Cards Enpoint - https://apidocs.bridge.xyz/reference/get_customers-customerid-card-accounts
