# Load Xcode version

GitHub action for loading Xcode version from shared file.

## Inputs

| Name | Description |     |
| ---- | ----------- | --- |
| `xcode_version_location` | Location of file where Xcode version is written | **Required** Default: `.github/xcode-version` |
| `autoselect_xcode` | If `true` then action will call `xcode-select` to automatically select loaded Xcode version | **Required** Default: `true` |

## Outputs

| Name | Description |
| ---- | ----------- |
| `xcode_version` | Version of Xcode that was loaded from given file |

## Example usage

### Basic usage

If you store your Xcode version in default location and you want the action to select it for you, you just call the action without any arguments.

```YAML
uses: AckeeCZ/load-xcode-version@v1
```

### Customized usage

If you store your Xcode version elsewhere and prefer to set it yourself, you just pass your location and you can disable calling `xcode-select`

```YAML
uses: AckeeCZ/load-xcode-version@v1
with:
    xcode_version_location: 'xcode_version'
    autoselect_xcode: 'false'
```