# Console Shared Types

A TypeScript package containing shared types and classes for console applications. This package supports both **CommonJS** and **ES Modules** for maximum compatibility, with **dual export support** for client-side and server-side usage.

## Project Structure

```
console-shared-types/
├── src/
│   ├── types/          # Type definitions
│   │   ├── enums.ts    # Enum definitions
│   │   ├── misc/       # Miscellaneous types
│   │   └── index.ts    # Types barrel export
│   ├── classes/        # Class definitions
│   │   ├── subscription/ # Subscription-related classes
│   │   └── index.ts    # Classes barrel export
│   ├── server/         # Server-side only exports
│   │   ├── crypto.ts   # Crypto utilities (Node.js only)
│   │   └── index.ts    # Server barrel export
│   ├── utils/          # Utility functions
│   └── index.ts        # Main entry point (client-safe)
├── build/              # Compiled JavaScript (generated)
│   ├── *.js           # CommonJS modules
│   ├── *.d.ts         # TypeScript declarations
│   └── server/        # Server-side compiled modules
├── scripts/            # Build scripts
├── tsconfig.json       # TypeScript configuration (CommonJS)
├── tsconfig.esm.json   # TypeScript configuration (ES modules)
├── package.json        # Package configuration
└── README.md          # This file
```

## Dual Export Support

This package provides **two separate entry points** to support both client-side and server-side usage:

### Client-Side Export (`@pikachu/console-types`)
**Safe for**: Browser, Next.js frontend, client-side code
**Contains**: All types, classes, and utilities (no Node.js dependencies)

```typescript
// Client-side usage
import { ConsumerModel, UserModel, DocumentSchema } from '@pikachu/console-types';
```

### Server-Side Export (`@pikachu/console-types/server`)
**Safe for**: Node.js, Next.js API routes, server-side code
**Contains**: All client-safe exports PLUS server-side crypto utilities

```typescript
// Server-side usage
import { CryptoUtils, ConsumerModel, CipherType } from '@pikachu/console-types/server';
```

## Module Support

Both exports support **CommonJS** and **ES Modules**:

### CommonJS (Node.js)
```javascript
// Client-safe
const { ConsumerModel, UserModel } = require('@pikachu/console-types');

// Server-side with crypto
const { CryptoUtils, ConsumerModel } = require('@pikachu/console-types/server');
```

### ES Modules (Modern Node.js, Bundlers)
```javascript
// Client-safe
import { ConsumerModel, UserModel } from '@pikachu/console-types';

// Server-side with crypto
import { CryptoUtils, ConsumerModel } from '@pikachu/console-types/server';
```

## Server-Side Crypto Utilities

The server export includes Node.js crypto utilities for encryption/decryption:

### CryptoUtils Class

```typescript
import { CryptoUtils, CipherType } from '@pikachu/console-types/server';

// Encrypt data
const encrypted: CipherType = CryptoUtils.encrypt(
  "Hello, World!", 
  "my-secret-key-32-characters-long"
);

// Decrypt data
const decrypted: string = CryptoUtils.decrypt(encrypted, "my-secret-key-32-characters-long");
```

### CipherType Interface

```typescript
interface CipherType {
  iv: string;      // Initialization vector (hex string)
  content: string; // Encrypted content (hex string)
}
```

**Note**: These crypto utilities use Node.js `crypto` module and are only available in the server export to prevent client-side bundling issues.

## Usage

### Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Build the project (generates both CommonJS and ES modules):
   ```bash
   npm run build
   ```

3. Watch for changes during development:
   ```bash
   npm run dev
   ```

### Build Scripts

- `npm run build` - Builds both CommonJS and ES modules
- `npm run build:cjs` - Builds only CommonJS modules
- `npm run build:esm` - Builds only ES modules
- `npm run fix:esm` - Fixes ES module import paths
- `npm run clean` - Cleans the dist directory

### Adding Types

Create new type files in the `src/types/` directory and export them from `src/types/index.ts`:

```typescript
// src/types/example-types.ts
export interface ExampleType {
  id: string;
  name: string;
}

// src/types/index.ts
export * from './example-types';
```

### Adding Classes

Create new class files in the `src/classes/` directory and export them from `src/classes/index.ts`:

```typescript
// src/classes/example-class.ts
export class ExampleClass {
  constructor(private name: string) {}
  
  getName(): string {
    return this.name;
  }
}

// src/classes/index.ts
export * from './example-class';
```

## Building

The project uses TypeScript's compiler to generate JavaScript files and type definitions in the `build/` directory. The build process:

1. Cleans the `build/` directory
2. Compiles TypeScript to CommonJS modules (`build/`)
3. Generates both client-safe and server-side exports
4. Creates separate entry points for dual export support

### Build Output Structure

```
build/
├── index.js              # Main client-safe entry point
├── index.d.ts            # Main TypeScript declarations
├── server/
│   ├── index.js          # Server entry point with crypto
│   ├── index.d.ts        # Server TypeScript declarations
│   ├── crypto.js         # Crypto utilities
│   └── crypto.d.ts       # Crypto TypeScript declarations
├── classes/              # Compiled class files
├── types/                # Compiled type files
└── utils/                # Compiled utility files
```

## Package Configuration

The `package.json` is configured for dual export support:

```json
{
  "main": "build/index.js",           // CommonJS entry point
  "types": "build/index.d.ts",        // TypeScript declarations
  "exports": {
    ".": {
      "types": "./build/index.d.ts",
      "import": "./build/index.js",    // Client-safe exports
      "require": "./build/index.js"
    },
    "./server": {
      "types": "./build/server/index.d.ts",
      "import": "./build/server/index.js",  // Server exports with crypto
      "require": "./build/server/index.js"
    }
  }
}
```

## Available Exports

### Client-Side Exports (`@pikachu/console-types`)

All client-safe types, classes, and utilities:

```typescript
import { 
  // Classes
  ConsumerModel,
  UserModel,
  AppModel,
  SubscriptionModel,
  
  // Types
  DocumentSchema,
  Authorization,
  
  // Enums
  plans, 
  domains, 
  billingType, 
  cycle, 
  roles, 
  appType, 
  products, 
  businessTypes, 
  productArray,
  
  // Utilities
  generateRandomAlphaNumeric,
  unixTimeStampNow
} from '@pikachu/console-types';
```

### Server-Side Exports (`@pikachu/console-types/server`)

All client-safe exports PLUS server-side crypto utilities:

```typescript
import { 
  // All client-safe exports above, plus:
  CryptoUtils,      // Node.js crypto utilities
  FunctionUtility,  // Server-side utility functions
  CipherType        // Crypto interface
} from '@pikachu/console-types/server';
```

### Classes
- `ConsumerModel` - Consumer management class
- `UserModel` - User management class  
- `AppModel` - Application management class
- `SubscriptionModel` - Subscription management class
- `CryptoUtils` - Server-side crypto utilities (server export only)
- `FunctionUtility` - Server-side utility functions (server export only)

### Types and Enums
- `DocumentSchema` - Base document schema
- `Authorization` - Authorization interface
- `CipherType` - Crypto cipher interface (server export only)
- `plans` - Billing plan types
- `domains` - Domain types
- `billingType` - Billing type enums
- `cycle` - Billing cycle enums
- `roles` - User role enums
- `appType` - Application type enums
- `products` - Product type enums
- `businessTypes` - Business type enums
- `productArray` - Product array types

### Utilities
- `generateRandomAlphaNumeric()` - Random string generator
- `unixTimeStampNow()` - Current Unix timestamp
- `CryptoUtils.encrypt()` - Encrypt data (server export only)
- `CryptoUtils.decrypt()` - Decrypt data (server export only)
- `FunctionUtility.generateConsumerApiKeys()` - Generate API keys for consumers (server export only)
- `FunctionUtility.bankidCipherString()` - Create encrypted strings (server export only)
- `FunctionUtility.createCipherString()` - Format cipher strings (server export only)

## Usage Examples

### Next.js Frontend (Client-Side)
```typescript
// pages/index.tsx or components/MyComponent.tsx
import { ConsumerModel, UserModel, DocumentSchema } from '@pikachu/console-types';

export default function MyComponent() {
  const consumer = new ConsumerModel({
    name: "Example Corp",
    slug: "example-corp",
    // ... other properties
  });
  
  return <div>{consumer.schema.name}</div>;
}
```

### Next.js API Routes (Server-Side)
```typescript
// pages/api/encrypt.ts
import { CryptoUtils, CipherType } from '@pikachu/console-types/server';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { text, key } = req.body;
    
    try {
      const encrypted: CipherType = CryptoUtils.encrypt(text, key);
      res.status(200).json({ encrypted });
    } catch (error) {
      res.status(500).json({ error: 'Encryption failed' });
    }
  }
}
```

### Next.js Server Actions with FunctionUtility
```typescript
// server/actions/consumers/mutations.ts
import { FunctionUtility, ConsumerModel } from '@pikachu/console-types/server';

export async function generateApiCredentials(consumerData: any, cipherKey: string) {
  const consumer = new ConsumerModel(consumerData);
  
  // Generate API keys with encryption
  const updatedConsumer = FunctionUtility.generateConsumerApiKeys(consumer, { 
    cipher: cipherKey 
  });
  
  return updatedConsumer;
}
```

### Node.js Backend
```typescript
// server.js or any Node.js file
const { CryptoUtils, ConsumerModel } = require('@pikachu/console-types/server');

// Use crypto utilities
const encrypted = CryptoUtils.encrypt("sensitive data", process.env.ENCRYPTION_KEY);
const decrypted = CryptoUtils.decrypt(encrypted, process.env.ENCRYPTION_KEY);

// Use regular classes
const consumer = new ConsumerModel(consumerData);
```

## Best Practices

1. **Always use the appropriate export**:
   - Use `@pikachu/console-types` for client-side code
   - Use `@pikachu/console-types/server` for server-side code

2. **Never import server exports in client code**:
   ```typescript
   // ❌ Don't do this in client-side code
   import { CryptoUtils } from '@pikachu/console-types/server';
   
   // ✅ Do this instead
   import { ConsumerModel } from '@pikachu/console-types';
   ```

3. **Environment-specific imports**:
   ```typescript
   // Conditional imports based on environment
   const isServer = typeof window === 'undefined';
   
   if (isServer) {
     const { CryptoUtils } = await import('@pikachu/console-types/server');
     // Use server-side functionality
   } else {
     const { ConsumerModel } = await import('@pikachu/console-types');
     // Use client-side functionality
   }
   ``` 