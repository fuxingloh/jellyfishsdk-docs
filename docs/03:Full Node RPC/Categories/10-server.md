---
title: Server API
---

```js
import {JsonRpcClient} from '@defichain/jellyfish-api-jsonrpc'
const client = new JsonRpcClient('http://foo:bar@localhost:8554')

// Using client.server.
const something = await client.server.method()
```

## getRpcInfo

Returns details of the RPC server.
- `active_commands` a list of active commands
- `logpath` the complete path to the debug log

```ts title="client.server.getRpcInfo()"
interface server {
  getRpcInfo (): Promise<RpcInfo>
}

interface RpcInfo {
  active_commands: ActiveCommand[]
  logpath: string
}

interface ActiveCommand {
  method: string
  duration: number
}
```

## uptime

Returns the total uptime of the server in seconds.

```ts title="client.server.uptime()"
interface server {
  uptime (): Promise<number>
}
```
