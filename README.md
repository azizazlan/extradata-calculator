# genesis file

Helps us to calculate `extraData` in a genesis file.


## Install

Clone this repo.

```
npm install
```

## Prerequisites

Create Ethereum accounts. For example, two accounts:

```
0x2573F1a1fb7CdBB94fAF59c0089cE150AfaC8B24
0xf4EE25680ec984C395B54fdF59C81408b4Ba980D
```

of course you can add more than 2 accounts.

## Usage

```
node index.js "0x2573F1a1fb7CdBB94fAF59c0089cE150AfaC8B24" "0xf4EE25680ec984C395B54fdF59C81408b4Ba980D"
```

Each account closed with a double quotes (") is separated by a space. This will generate `extraData` value:

```
0x00000000000000000000000000000000000000000000000000000000000000002573f1a1fb7cdbb94faf59c0089ce150afac8b24f4ee25680ec984c395b54fdf59c81408b4ba980d0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
```
