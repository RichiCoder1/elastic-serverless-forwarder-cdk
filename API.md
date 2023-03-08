# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerlessForwarder <a name="ServerlessForwarder" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder"></a>

#### Initializers <a name="Initializers" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.Initializer"></a>

```typescript
import { ServerlessForwarder } from '@richicoder/elastic-serverless-forwarder-cdk'

new ServerlessForwarder(scope: Construct, id: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarder.Initializer.parameter.id"></a>

- *Type:* string

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


## Structs <a name="Structs" id="Structs"></a>

### ServerlessForwarderProps <a name="ServerlessForwarderProps" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps"></a>

#### Initializer <a name="Initializer" id="@richicoder/elastic-serverless-forwarder-cdk.ServerlessForwarderProps.Initializer"></a>

```typescript
import { ServerlessForwarderProps } from '@richicoder/elastic-serverless-forwarder-cdk'

const serverlessForwarderProps: ServerlessForwarderProps = { ... }
```




