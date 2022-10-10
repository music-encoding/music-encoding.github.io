# The MEI Website

[![Check Links](https://github.com/music-encoding/music-encoding.github.io/actions/workflows/link-checker.yml/badge.svg)](https://github.com/music-encoding/music-encoding.github.io/actions/workflows/link-checker.yml)

This is the MEI website, available at [https://music-encoding.org](https://music-encoding.org).

## License

This repo is released under the [ECL-2.0](LICENSE), and original creations contributed to this repo are accepted under the same license.

## Contributing

For information about contributing and developing the website locally, please refer to the [Contributing Guidelines](CONTRIBUTING.md)

## Third-party components

### Spectre.css

The MEI website uses [Spectre.css](https://picturepan2.github.io/spectre/) as published at <https://github.com/picturepan2/spectre> under the terms of the MIT-license.

## Continuous integration and deployment

This website is being built automatially whenever a commit is pushed to the main branch. The build is being executed through our custom github action instead of github-pages. This decision was made due to the limitations githup-pages poses in terms of available jekyll plugins (gems). Nevertheless, the technology for the website is basically the same as when using github-pages, which is still being used for deploying the website.
