# Reposit Test

## Description

**Reposit Test** is a TypeScript-based project designed for parsing CSV data and performing various operations related to property management. The project uses Jest for testing and coverage reporting, ensuring high code quality and reliability.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Test Coverage](#test-coverage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the required dependencies, run the following command:

```
npm install
```

## Usage
You can create and manage your CSV data processing through various service files located in the src/services directory. Each service handles specific aspects of CSV data processing, including reading, formatting, and validating data.

Example
```
import { csvReader } from './services/csvReader';
import { outputFormatter } from './services/outputFormatter';

/*Example of reading a CSV file*/
const data = csvReader('path/to/file.csv');

/*Formatting the output*/
const formattedOutput = outputFormatter(data);
console.log(formattedOutput);
```

## Testing

This project uses Jest for testing. To run the tests, execute the following command:

```
npm test
```

## Project Structure
The project is organized as follows:



```
reposit-test/
├── src/
│   ├── models/
│   │   ├── Property.ts
│   │   ├── Tenant.ts
│   ├── services/
│   │   ├── averageRent.ts
│   │   ├── csvReader.ts
│   │   ├── outputFormatter.ts
│   │   ├── postcodeValidator.ts
│   │   ├── propertyFilter.ts
│   │   ├── propertyStatus.ts
│   │   └── rentPerTenant.ts
│   └── index.ts
├── test/
│   └── services/
│       ├── averageRent.test.ts
│       ├── csvReader.test.ts
│       ├── outputFormatter.test.ts
│       ├── postcodeValidator.test.ts
│       ├── propertyFilter.test.ts
│       ├── propertyStatus.test.ts
│       └── rentPerTenant.test.ts
│   └── integration/
│       └── integration.test.ts
├── properties.csv
├── tenants.csv
├── jest.config.js
├── package.json
└── tsconfig.json

```

Explanation of Key Files
- src/services/: Contains all service modules for processing CSV data.
- index.ts: The entry point of the application.
- test/: Contains all test files corresponding to the service modules.
- jest.config.js: Configuration file for Jest.
- package.json: Lists project metadata and dependencies.
- tsconfig.json: TypeScript configuration file.


## Testing

This project uses Jest for testing. To run the tests, execute the following command:

```
npm test
```

### Test Structure
All test files should be named with a .test.ts suffix and reside alongside the source files they are testing. The project is set to match test files with the following pattern:

```
**/*.test.ts

```

## Test Coverage
Code coverage is collected automatically when you run the tests. The coverage report will be displayed in the console and can also be found in the coverage directory in various formats.

To check the latest coverage results, run:

```
npm test -- --coverage
```

Latest Coverage Results
The following coverage results have been reported for the project:

```
-----------------------|---------|----------|---------|---------|-------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------------|---------|----------|---------|---------|-------------------
All files              |   78.68 |      100 |   88.88 |   79.31 |                   
 src                   |       0 |      100 |       0 |       0 |                   
 src/services          |   97.95 |      100 |     100 |   97.87 |                   
  averageRent.ts       |     100 |      100 |     100 |     100 |                   
  csvReader.ts         |     100 |      100 |     100 |     100 |                   
  outputFormatter.ts   |     100 |      100 |     100 |     100 |                   
  postcodeValidator.ts |     100 |      100 |     100 |     100 |                   
  propertyFilter.ts    |     100 |      100 |     100 |     100 |                   
  propertyStatus.ts    |   91.66 |      100 |     100 |   91.66 | 25                
  rentPerTenant.ts     |     100 |      100 |     100 |     100 |                  
```

## Dependencies

The project depends on the following packages:

- csv-parse: A library to parse CSV files.
- csv-parser: A fast CSV parsing library for Node.js.
- jest: A testing framework for JavaScript.
- ts-jest: A Jest transformer for TypeScript.
- @types/jest: Type definitions for Jest.
- typescript: The TypeScript programming language.
- fs: The Node.js File System module.

You can find these dependencies listed in the package.json file.







