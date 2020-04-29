# Load Xcode version

GitHub action for loading Xcode version from shared file.

## Inputs

| Name | Description |     |
| ---- | ----------- | --- |
| `xcode_version_location` | Location of file where Xcode version is written | **Required** Default: `.github/xcode_version` |
| `autoselect_xcode` | If `true` then action will call `xcode-select` to automatically select loaded Xcode version | **Required** Default: `true` |

## Outputs

| Name | Description |
| ---- | ----------- |
| `xcode_version` | Version of Xcode that was loaded from given file |