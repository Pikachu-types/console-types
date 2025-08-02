# Console Shared Types

A TypeScript package containing shared types and classes for console applications. This package supports both **CommonJS** and **ES Modules** for maximum compatibility.

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
│   └── index.ts        # Main entry point
├── dist/               # Compiled JavaScript (generated)
│   ├── *.js           # CommonJS modules
│   ├── *.d.ts         # TypeScript declarations
│   └── esm/           # ES modules
├── scripts/            # Build scripts
├── tsconfig.json       # TypeScript configuration (CommonJS)
├── tsconfig.esm.json   # TypeScript configuration (ES modules)
├── package.json        # Package configuration
└── README.md          # This file
```

## Module Support

This package supports both **CommonJS** and **ES Modules**:

### CommonJS (Node.js)
```javascript
const { SubscriptionModel, plans, domains } = require('console-shared-types');
```

### ES Modules (Modern Node.js, Bundlers)
```javascript
import { SubscriptionModel, plans, domains } from 'console-shared-types';
```

### TypeScript
```typescript
import { SubscriptionModel, plans, domains } from 'console-shared-types';
```

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

The project uses TypeScript's compiler to generate JavaScript files and type definitions in the `dist/` directory. The build process:

1. Cleans the `dist/` directory
2. Compiles TypeScript to CommonJS modules (`dist/`)
3. Compiles TypeScript to ES modules (`dist/esm/`)
4. Fixes ES module import paths to include file extensions

## Package Configuration

The `package.json` is configured for dual module support:

```json
{
  "main": "dist/index.js",           // CommonJS entry point
  "module": "dist/esm/index.js",     // ES module entry point
  "types": "dist/index.d.ts",        // TypeScript declarations
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/esm/index.js",  // ES modules
      "require": "./dist/index.js"      // CommonJS
    }
  }
}
```

## Exports

The package exports all types and classes through the main entry point at `src/index.ts`. When importing from this package, you can access all exported types and classes:

```typescript
import { 
  SubscriptionModel, 
  plans, 
  domains, 
  billingType, 
  cycle, 
  roles, 
  appType, 
  products, 
  businessTypes, 
  productArray 
} from 'console-shared-types';
```

## Available Exports

### Classes
- `SubscriptionModel` - Subscription management class

### Types and Enums
- `plans` - Billing plan types
- `domains` - Domain types
- `billingType` - Billing type enums
- `cycle` - Billing cycle enums
- `roles` - User role enums
- `appType` - Application type enums
- `products` - Product type enums
- `businessTypes` - Business type enums
- `productArray` - Product array types 