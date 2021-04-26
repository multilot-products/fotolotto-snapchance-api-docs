const widdershins = require('widdershins');
const fs = require('fs');
const YAML = require('yaml')

const options = {
  codeSamples: true,
  httpsnippet: false,
  language_tabs: [
    { 'csharp': "C#" },
    { 'shell': "Shell" },
    { 'http': "HTTP" },
    { 'javascript': 'JavaScript' },
    { 'nodejs': 'Node.JS' },
    { 'ruby': 'Ruby' }
  ],
  theme: 'darkula',
  search: true,
  sample: true,
  discovery: false,
  includes: [
    'introduction',
    'flows'
  ],
  shallowSchemas: false,
  tocSummary: false,
  headings: 2,
  yaml: false,
  resolve: false,
  toc_footers: [{ url: "https://snapchance.no", description: "SnapChance Norway" }]
}

// TODO: We might want to consider moving this repo to a subdir of the api project or getting this file in some other way
const fileData = fs.readFileSync('../fotolotto-snapchance-api/public/apiDocs.yaml', 'utf8');
const data  = YAML.parse(fileData);

widdershins.convert(data, options)
  .then(markdownOutput => {
    fs.writeFileSync('./source/index.html.md', markdownOutput, 'utf8');
  })
  .catch(err => {
    console.error(err);
  });
