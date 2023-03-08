# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerlessForwarder <a name="ServerlessForwarder" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder"></a>

#### Initializers <a name="Initializers" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.Initializer"></a>

```typescript
import { ServerlessForwarder } from '@richicoder/elastic-serverless-forwarder-cdk'

new ServerlessForwarder(scope: Construct, id: string, props: ServerlessForwarderProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.Initializer.parameter.props">props</a></code> | <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps">ServerlessForwarderProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.Initializer.parameter.props"></a>

- *Type:* <a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps">ServerlessForwarderProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.isConstruct"></a>

```typescript
import { ServerlessForwarder } from '@richicoder/elastic-serverless-forwarder-cdk'

ServerlessForwarder.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.property.application">application</a></code> | <code>aws-cdk-lib.aws_sam.CfnApplication</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.property.props">props</a></code> | <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps">ServerlessForwarderProps</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `application`<sup>Required</sup> <a name="application" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.property.application"></a>

```typescript
public readonly application: CfnApplication;
```

- *Type:* aws-cdk-lib.aws_sam.CfnApplication

---

##### `props`<sup>Required</sup> <a name="props" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.property.props"></a>

```typescript
public readonly props: ServerlessForwarderProps;
```

- *Type:* <a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps">ServerlessForwarderProps</a>

---


## Structs <a name="Structs" id="Structs"></a>

### ElasticsearchOutputProps <a name="ElasticsearchOutputProps" id="@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps"></a>

#### Initializer <a name="Initializer" id="@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.Initializer"></a>

```typescript
import { ElasticsearchOutputProps } from '@richicoder/elastic-serverless-forwarder-cdk'

const elasticsearchOutputProps: ElasticsearchOutputProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.apiKey">apiKey</a></code> | <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.Secret">Secret</a></code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.batchMaxActions">batchMaxActions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.batchMaxBytes">batchMaxBytes</a></code> | <code>aws-cdk-lib.Size</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.cloudId">cloudId</a></code> | <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.Secret">Secret</a></code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.elasticsearchUrl">elasticsearchUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.esDatastreamName">esDatastreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.password">password</a></code> | <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.Secret">Secret</a></code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.sslAssertFingerprint">sslAssertFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.username">username</a></code> | <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.Secret">Secret</a></code> | *No description.* |

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.apiKey"></a>

```typescript
public readonly apiKey: Secret;
```

- *Type:* <a href="#@richicoder/elastic-serverless-forwarder-cdk.Secret">Secret</a>

---

##### `batchMaxActions`<sup>Optional</sup> <a name="batchMaxActions" id="@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.batchMaxActions"></a>

```typescript
public readonly batchMaxActions: number;
```

- *Type:* number

---

##### `batchMaxBytes`<sup>Optional</sup> <a name="batchMaxBytes" id="@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.batchMaxBytes"></a>

```typescript
public readonly batchMaxBytes: Size;
```

- *Type:* aws-cdk-lib.Size

---

##### `cloudId`<sup>Optional</sup> <a name="cloudId" id="@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.cloudId"></a>

```typescript
public readonly cloudId: Secret;
```

- *Type:* <a href="#@richicoder/elastic-serverless-forwarder-cdk.Secret">Secret</a>

---

##### `elasticsearchUrl`<sup>Optional</sup> <a name="elasticsearchUrl" id="@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.elasticsearchUrl"></a>

```typescript
public readonly elasticsearchUrl: string;
```

- *Type:* string

---

##### `esDatastreamName`<sup>Optional</sup> <a name="esDatastreamName" id="@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.esDatastreamName"></a>

```typescript
public readonly esDatastreamName: string;
```

- *Type:* string

---

##### `password`<sup>Optional</sup> <a name="password" id="@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.password"></a>

```typescript
public readonly password: Secret;
```

- *Type:* <a href="#@richicoder/elastic-serverless-forwarder-cdk.Secret">Secret</a>

---

##### `sslAssertFingerprint`<sup>Optional</sup> <a name="sslAssertFingerprint" id="@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.sslAssertFingerprint"></a>

```typescript
public readonly sslAssertFingerprint: string;
```

- *Type:* string

---

##### `username`<sup>Optional</sup> <a name="username" id="@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps.property.username"></a>

```typescript
public readonly username: Secret;
```

- *Type:* <a href="#@richicoder/elastic-serverless-forwarder-cdk.Secret">Secret</a>

---

### ForwarderInput <a name="ForwarderInput" id="@richicoder/elastic-serverless-forwarder-cdk.ForwarderInput"></a>

#### Initializer <a name="Initializer" id="@richicoder/elastic-serverless-forwarder-cdk.ForwarderInput.Initializer"></a>

```typescript
import { ForwarderInput } from '@richicoder/elastic-serverless-forwarder-cdk'

const forwarderInput: ForwarderInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ForwarderInput.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ForwarderInput.property.outputs">outputs</a></code> | <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ForwarderOutput">ForwarderOutput</a>[]</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ForwarderInput.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="@richicoder/elastic-serverless-forwarder-cdk.ForwarderInput.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@richicoder/elastic-serverless-forwarder-cdk.ForwarderInput.property.outputs"></a>

```typescript
public readonly outputs: ForwarderOutput[];
```

- *Type:* <a href="#@richicoder/elastic-serverless-forwarder-cdk.ForwarderOutput">ForwarderOutput</a>[]

---

##### `type`<sup>Required</sup> <a name="type" id="@richicoder/elastic-serverless-forwarder-cdk.ForwarderInput.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

### ForwarderInputPropsBase <a name="ForwarderInputPropsBase" id="@richicoder/elastic-serverless-forwarder-cdk.ForwarderInputPropsBase"></a>

#### Initializer <a name="Initializer" id="@richicoder/elastic-serverless-forwarder-cdk.ForwarderInputPropsBase.Initializer"></a>

```typescript
import { ForwarderInputPropsBase } from '@richicoder/elastic-serverless-forwarder-cdk'

const forwarderInputPropsBase: ForwarderInputPropsBase = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ForwarderInputPropsBase.property.exclude">exclude</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ForwarderInputPropsBase.property.expandEventListFromField">expandEventListFromField</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ForwarderInputPropsBase.property.include">include</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ForwarderInputPropsBase.property.jsonContentType">jsonContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ForwarderInputPropsBase.property.multiline">multiline</a></code> | <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.MultilineProps">MultilineProps</a></code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ForwarderInputPropsBase.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@richicoder/elastic-serverless-forwarder-cdk.ForwarderInputPropsBase.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* string[]

---

##### `expandEventListFromField`<sup>Optional</sup> <a name="expandEventListFromField" id="@richicoder/elastic-serverless-forwarder-cdk.ForwarderInputPropsBase.property.expandEventListFromField"></a>

```typescript
public readonly expandEventListFromField: string;
```

- *Type:* string

---

##### `include`<sup>Optional</sup> <a name="include" id="@richicoder/elastic-serverless-forwarder-cdk.ForwarderInputPropsBase.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* string[]

---

##### `jsonContentType`<sup>Optional</sup> <a name="jsonContentType" id="@richicoder/elastic-serverless-forwarder-cdk.ForwarderInputPropsBase.property.jsonContentType"></a>

```typescript
public readonly jsonContentType: string;
```

- *Type:* string

---

##### `multiline`<sup>Optional</sup> <a name="multiline" id="@richicoder/elastic-serverless-forwarder-cdk.ForwarderInputPropsBase.property.multiline"></a>

```typescript
public readonly multiline: MultilineProps;
```

- *Type:* <a href="#@richicoder/elastic-serverless-forwarder-cdk.MultilineProps">MultilineProps</a>

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@richicoder/elastic-serverless-forwarder-cdk.ForwarderInputPropsBase.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

### ForwarderOutput <a name="ForwarderOutput" id="@richicoder/elastic-serverless-forwarder-cdk.ForwarderOutput"></a>

#### Initializer <a name="Initializer" id="@richicoder/elastic-serverless-forwarder-cdk.ForwarderOutput.Initializer"></a>

```typescript
import { ForwarderOutput } from '@richicoder/elastic-serverless-forwarder-cdk'

const forwarderOutput: ForwarderOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ForwarderOutput.property.args">args</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ForwarderOutput.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `args`<sup>Required</sup> <a name="args" id="@richicoder/elastic-serverless-forwarder-cdk.ForwarderOutput.property.args"></a>

```typescript
public readonly args: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `type`<sup>Required</sup> <a name="type" id="@richicoder/elastic-serverless-forwarder-cdk.ForwarderOutput.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

### LogstashOutputProps <a name="LogstashOutputProps" id="@richicoder/elastic-serverless-forwarder-cdk.LogstashOutputProps"></a>

#### Initializer <a name="Initializer" id="@richicoder/elastic-serverless-forwarder-cdk.LogstashOutputProps.Initializer"></a>

```typescript
import { LogstashOutputProps } from '@richicoder/elastic-serverless-forwarder-cdk'

const logstashOutputProps: LogstashOutputProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.LogstashOutputProps.property.logstashUrl">logstashUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.LogstashOutputProps.property.compressionLevel">compressionLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.LogstashOutputProps.property.maxBatchSize">maxBatchSize</a></code> | <code>aws-cdk-lib.Size</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.LogstashOutputProps.property.password">password</a></code> | <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.Secret">Secret</a></code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.LogstashOutputProps.property.sslAssertFingerprint">sslAssertFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.LogstashOutputProps.property.username">username</a></code> | <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.Secret">Secret</a></code> | *No description.* |

---

##### `logstashUrl`<sup>Required</sup> <a name="logstashUrl" id="@richicoder/elastic-serverless-forwarder-cdk.LogstashOutputProps.property.logstashUrl"></a>

```typescript
public readonly logstashUrl: string;
```

- *Type:* string

---

##### `compressionLevel`<sup>Optional</sup> <a name="compressionLevel" id="@richicoder/elastic-serverless-forwarder-cdk.LogstashOutputProps.property.compressionLevel"></a>

```typescript
public readonly compressionLevel: number;
```

- *Type:* number

---

##### `maxBatchSize`<sup>Optional</sup> <a name="maxBatchSize" id="@richicoder/elastic-serverless-forwarder-cdk.LogstashOutputProps.property.maxBatchSize"></a>

```typescript
public readonly maxBatchSize: Size;
```

- *Type:* aws-cdk-lib.Size

---

##### `password`<sup>Optional</sup> <a name="password" id="@richicoder/elastic-serverless-forwarder-cdk.LogstashOutputProps.property.password"></a>

```typescript
public readonly password: Secret;
```

- *Type:* <a href="#@richicoder/elastic-serverless-forwarder-cdk.Secret">Secret</a>

---

##### `sslAssertFingerprint`<sup>Optional</sup> <a name="sslAssertFingerprint" id="@richicoder/elastic-serverless-forwarder-cdk.LogstashOutputProps.property.sslAssertFingerprint"></a>

```typescript
public readonly sslAssertFingerprint: string;
```

- *Type:* string

---

##### `username`<sup>Optional</sup> <a name="username" id="@richicoder/elastic-serverless-forwarder-cdk.LogstashOutputProps.property.username"></a>

```typescript
public readonly username: Secret;
```

- *Type:* <a href="#@richicoder/elastic-serverless-forwarder-cdk.Secret">Secret</a>

---

### MultilineProps <a name="MultilineProps" id="@richicoder/elastic-serverless-forwarder-cdk.MultilineProps"></a>

#### Initializer <a name="Initializer" id="@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.Initializer"></a>

```typescript
import { MultilineProps } from '@richicoder/elastic-serverless-forwarder-cdk'

const multilineProps: MultilineProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.pattern">pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.countLines">countLines</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.flushPattern">flushPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.match">match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.maxBytes">maxBytes</a></code> | <code>aws-cdk-lib.Size</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.maxLines">maxLines</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.negate">negate</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.skipNewline">skipNewline</a></code> | <code>boolean</code> | *No description.* |

---

##### `pattern`<sup>Required</sup> <a name="pattern" id="@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.pattern"></a>

```typescript
public readonly pattern: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `countLines`<sup>Optional</sup> <a name="countLines" id="@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.countLines"></a>

```typescript
public readonly countLines: number;
```

- *Type:* number

---

##### `flushPattern`<sup>Optional</sup> <a name="flushPattern" id="@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.flushPattern"></a>

```typescript
public readonly flushPattern: string;
```

- *Type:* string

---

##### `match`<sup>Optional</sup> <a name="match" id="@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

---

##### `maxBytes`<sup>Optional</sup> <a name="maxBytes" id="@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.maxBytes"></a>

```typescript
public readonly maxBytes: Size;
```

- *Type:* aws-cdk-lib.Size

---

##### `maxLines`<sup>Optional</sup> <a name="maxLines" id="@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.maxLines"></a>

```typescript
public readonly maxLines: number;
```

- *Type:* number

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.negate"></a>

```typescript
public readonly negate: boolean;
```

- *Type:* boolean

---

##### `skipNewline`<sup>Optional</sup> <a name="skipNewline" id="@richicoder/elastic-serverless-forwarder-cdk.MultilineProps.property.skipNewline"></a>

```typescript
public readonly skipNewline: boolean;
```

- *Type:* boolean

---

### ServerlessForwarderProps <a name="ServerlessForwarderProps" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps"></a>

#### Initializer <a name="Initializer" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps.Initializer"></a>

```typescript
import { ServerlessForwarderProps } from '@richicoder/elastic-serverless-forwarder-cdk'

const serverlessForwarderProps: ServerlessForwarderProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps.property.inputs">inputs</a></code> | <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.IForwarderInput">IForwarderInput</a>[]</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps.property.bucket">bucket</a></code> | <code>aws-cdk-lib.aws_s3.IBucket</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps.property.bucketPrefix">bucketPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps.property.overrideParameters">overrideParameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `inputs`<sup>Required</sup> <a name="inputs" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps.property.inputs"></a>

```typescript
public readonly inputs: IForwarderInput[];
```

- *Type:* <a href="#@richicoder/elastic-serverless-forwarder-cdk.IForwarderInput">IForwarderInput</a>[]

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps.property.bucket"></a>

```typescript
public readonly bucket: IBucket;
```

- *Type:* aws-cdk-lib.aws_s3.IBucket

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `bucketPrefix`<sup>Optional</sup> <a name="bucketPrefix" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps.property.bucketPrefix"></a>

```typescript
public readonly bucketPrefix: string;
```

- *Type:* string

---

##### `overrideParameters`<sup>Optional</sup> <a name="overrideParameters" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps.property.overrideParameters"></a>

```typescript
public readonly overrideParameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `version`<sup>Optional</sup> <a name="version" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

## Classes <a name="Classes" id="Classes"></a>

### ElasticsearchOuput <a name="ElasticsearchOuput" id="@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOuput"></a>

#### Initializers <a name="Initializers" id="@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOuput.Initializer"></a>

```typescript
import { ElasticsearchOuput } from '@richicoder/elastic-serverless-forwarder-cdk'

new ElasticsearchOuput(props: ElasticsearchOutputProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOuput.Initializer.parameter.props">props</a></code> | <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps">ElasticsearchOutputProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOuput.Initializer.parameter.props"></a>

- *Type:* <a href="#@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOutputProps">ElasticsearchOutputProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOuput.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOuput.bind"></a>

```typescript
public bind(parameters: {[ key: string ]: string}): ForwarderOutput
```

###### `parameters`<sup>Required</sup> <a name="parameters" id="@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOuput.bind.parameter.parameters"></a>

- *Type:* {[ key: string ]: string}

---




### FowarderParameter <a name="FowarderParameter" id="@richicoder/elastic-serverless-forwarder-cdk.FowarderParameter"></a>

#### Initializers <a name="Initializers" id="@richicoder/elastic-serverless-forwarder-cdk.FowarderParameter.Initializer"></a>

```typescript
import { FowarderParameter } from '@richicoder/elastic-serverless-forwarder-cdk'

new FowarderParameter()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.FowarderParameter.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@richicoder/elastic-serverless-forwarder-cdk.FowarderParameter.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---


### InputBase <a name="InputBase" id="@richicoder/elastic-serverless-forwarder-cdk.InputBase"></a>

- *Implements:* <a href="#@richicoder/elastic-serverless-forwarder-cdk.IForwarderInput">IForwarderInput</a>

#### Initializers <a name="Initializers" id="@richicoder/elastic-serverless-forwarder-cdk.InputBase.Initializer"></a>

```typescript
import { InputBase } from '@richicoder/elastic-serverless-forwarder-cdk'

new InputBase()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.InputBase.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="@richicoder/elastic-serverless-forwarder-cdk.InputBase.bind"></a>

```typescript
public bind(_parameters: {[ key: string ]: string}): ForwarderInput
```

###### `_parameters`<sup>Required</sup> <a name="_parameters" id="@richicoder/elastic-serverless-forwarder-cdk.InputBase.bind.parameter._parameters"></a>

- *Type:* {[ key: string ]: string}

---




### LogstashOutput <a name="LogstashOutput" id="@richicoder/elastic-serverless-forwarder-cdk.LogstashOutput"></a>

#### Initializers <a name="Initializers" id="@richicoder/elastic-serverless-forwarder-cdk.LogstashOutput.Initializer"></a>

```typescript
import { LogstashOutput } from '@richicoder/elastic-serverless-forwarder-cdk'

new LogstashOutput(props: LogstashOutputProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.LogstashOutput.Initializer.parameter.props">props</a></code> | <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.LogstashOutputProps">LogstashOutputProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@richicoder/elastic-serverless-forwarder-cdk.LogstashOutput.Initializer.parameter.props"></a>

- *Type:* <a href="#@richicoder/elastic-serverless-forwarder-cdk.LogstashOutputProps">LogstashOutputProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.LogstashOutput.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="@richicoder/elastic-serverless-forwarder-cdk.LogstashOutput.bind"></a>

```typescript
public bind(parameters: {[ key: string ]: string}): ForwarderOutput
```

###### `parameters`<sup>Required</sup> <a name="parameters" id="@richicoder/elastic-serverless-forwarder-cdk.LogstashOutput.bind.parameter.parameters"></a>

- *Type:* {[ key: string ]: string}

---




### OutputBase <a name="OutputBase" id="@richicoder/elastic-serverless-forwarder-cdk.OutputBase"></a>

- *Implements:* <a href="#@richicoder/elastic-serverless-forwarder-cdk.IForwarderOutput">IForwarderOutput</a>

#### Initializers <a name="Initializers" id="@richicoder/elastic-serverless-forwarder-cdk.OutputBase.Initializer"></a>

```typescript
import { OutputBase } from '@richicoder/elastic-serverless-forwarder-cdk'

new OutputBase()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.OutputBase.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="@richicoder/elastic-serverless-forwarder-cdk.OutputBase.bind"></a>

```typescript
public bind(_parameters: {[ key: string ]: string}): ForwarderOutput
```

###### `_parameters`<sup>Required</sup> <a name="_parameters" id="@richicoder/elastic-serverless-forwarder-cdk.OutputBase.bind.parameter._parameters"></a>

- *Type:* {[ key: string ]: string}

---




### ParameterKeys <a name="ParameterKeys" id="@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys"></a>

#### Initializers <a name="Initializers" id="@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.Initializer"></a>

```typescript
import { ParameterKeys } from '@richicoder/elastic-serverless-forwarder-cdk'

new ParameterKeys()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.append">append</a></code> | *No description.* |

---

##### `append` <a name="append" id="@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.append"></a>

```typescript
import { ParameterKeys } from '@richicoder/elastic-serverless-forwarder-cdk'

ParameterKeys.append(parameters: {[ key: string ]: string}, key: string, value: string)
```

###### `parameters`<sup>Required</sup> <a name="parameters" id="@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.append.parameter.parameters"></a>

- *Type:* {[ key: string ]: string}

---

###### `key`<sup>Required</sup> <a name="key" id="@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.append.parameter.key"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.append.parameter.value"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.cloudWatchLogsEvents">cloudWatchLogsEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.kinesisEvents">kinesisEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.kmsKeys">kmsKeys</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.s3Buckets">s3Buckets</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.s3ConfigFile">s3ConfigFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.s3SQSEvents">s3SQSEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.secretArns">secretArns</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.securityGroups">securityGroups</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.sqsEvents">sqsEvents</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.subnets">subnets</a></code> | <code>string</code> | *No description.* |

---

##### `cloudWatchLogsEvents`<sup>Required</sup> <a name="cloudWatchLogsEvents" id="@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.cloudWatchLogsEvents"></a>

```typescript
public readonly cloudWatchLogsEvents: string;
```

- *Type:* string

---

##### `kinesisEvents`<sup>Required</sup> <a name="kinesisEvents" id="@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.kinesisEvents"></a>

```typescript
public readonly kinesisEvents: string;
```

- *Type:* string

---

##### `kmsKeys`<sup>Required</sup> <a name="kmsKeys" id="@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.kmsKeys"></a>

```typescript
public readonly kmsKeys: string;
```

- *Type:* string

---

##### `s3Buckets`<sup>Required</sup> <a name="s3Buckets" id="@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.s3Buckets"></a>

```typescript
public readonly s3Buckets: string;
```

- *Type:* string

---

##### `s3ConfigFile`<sup>Required</sup> <a name="s3ConfigFile" id="@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.s3ConfigFile"></a>

```typescript
public readonly s3ConfigFile: string;
```

- *Type:* string

---

##### `s3SQSEvents`<sup>Required</sup> <a name="s3SQSEvents" id="@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.s3SQSEvents"></a>

```typescript
public readonly s3SQSEvents: string;
```

- *Type:* string

---

##### `secretArns`<sup>Required</sup> <a name="secretArns" id="@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.secretArns"></a>

```typescript
public readonly secretArns: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.securityGroups"></a>

```typescript
public readonly securityGroups: string;
```

- *Type:* string

---

##### `sqsEvents`<sup>Required</sup> <a name="sqsEvents" id="@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.sqsEvents"></a>

```typescript
public readonly sqsEvents: string;
```

- *Type:* string

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@richicoder/elastic-serverless-forwarder-cdk.ParameterKeys.property.subnets"></a>

```typescript
public readonly subnets: string;
```

- *Type:* string

---


### Secret <a name="Secret" id="@richicoder/elastic-serverless-forwarder-cdk.Secret"></a>

#### Initializers <a name="Initializers" id="@richicoder/elastic-serverless-forwarder-cdk.Secret.Initializer"></a>

```typescript
import { Secret } from '@richicoder/elastic-serverless-forwarder-cdk'

new Secret()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.Secret.fromSecretsManager">fromSecretsManager</a></code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.Secret.isSecret">isSecret</a></code> | *No description.* |

---

##### `fromSecretsManager` <a name="fromSecretsManager" id="@richicoder/elastic-serverless-forwarder-cdk.Secret.fromSecretsManager"></a>

```typescript
import { Secret } from '@richicoder/elastic-serverless-forwarder-cdk'

Secret.fromSecretsManager(secret: ISecret, field?: string)
```

###### `secret`<sup>Required</sup> <a name="secret" id="@richicoder/elastic-serverless-forwarder-cdk.Secret.fromSecretsManager.parameter.secret"></a>

- *Type:* aws-cdk-lib.aws_secretsmanager.ISecret

---

###### `field`<sup>Optional</sup> <a name="field" id="@richicoder/elastic-serverless-forwarder-cdk.Secret.fromSecretsManager.parameter.field"></a>

- *Type:* string

---

##### `isSecret` <a name="isSecret" id="@richicoder/elastic-serverless-forwarder-cdk.Secret.isSecret"></a>

```typescript
import { Secret } from '@richicoder/elastic-serverless-forwarder-cdk'

Secret.isSecret(secret: any)
```

###### `secret`<sup>Required</sup> <a name="secret" id="@richicoder/elastic-serverless-forwarder-cdk.Secret.isSecret.parameter.secret"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.Secret.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.Secret.property.keyArn">keyArn</a></code> | <code>string</code> | *No description.* |

---

##### `arn`<sup>Required</sup> <a name="arn" id="@richicoder/elastic-serverless-forwarder-cdk.Secret.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `keyArn`<sup>Optional</sup> <a name="keyArn" id="@richicoder/elastic-serverless-forwarder-cdk.Secret.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IForwarderInput <a name="IForwarderInput" id="@richicoder/elastic-serverless-forwarder-cdk.IForwarderInput"></a>

- *Implemented By:* <a href="#@richicoder/elastic-serverless-forwarder-cdk.InputBase">InputBase</a>, <a href="#@richicoder/elastic-serverless-forwarder-cdk.IForwarderInput">IForwarderInput</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.IForwarderInput.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="@richicoder/elastic-serverless-forwarder-cdk.IForwarderInput.bind"></a>

```typescript
public bind(parameters: {[ key: string ]: string}): ForwarderInput
```

###### `parameters`<sup>Required</sup> <a name="parameters" id="@richicoder/elastic-serverless-forwarder-cdk.IForwarderInput.bind.parameter.parameters"></a>

- *Type:* {[ key: string ]: string}

---


### IForwarderOutput <a name="IForwarderOutput" id="@richicoder/elastic-serverless-forwarder-cdk.IForwarderOutput"></a>

- *Implemented By:* <a href="#@richicoder/elastic-serverless-forwarder-cdk.ElasticsearchOuput">ElasticsearchOuput</a>, <a href="#@richicoder/elastic-serverless-forwarder-cdk.LogstashOutput">LogstashOutput</a>, <a href="#@richicoder/elastic-serverless-forwarder-cdk.OutputBase">OutputBase</a>, <a href="#@richicoder/elastic-serverless-forwarder-cdk.IForwarderOutput">IForwarderOutput</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.IForwarderOutput.bind">bind</a></code> | *No description.* |

---

##### `bind` <a name="bind" id="@richicoder/elastic-serverless-forwarder-cdk.IForwarderOutput.bind"></a>

```typescript
public bind(parameters: {[ key: string ]: string}): ForwarderOutput
```

###### `parameters`<sup>Required</sup> <a name="parameters" id="@richicoder/elastic-serverless-forwarder-cdk.IForwarderOutput.bind.parameter.parameters"></a>

- *Type:* {[ key: string ]: string}

---


