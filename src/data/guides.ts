import { guideUpdates } from './guide-updates';
export type Guide={slug:string;title:string;description:string;cat:string;minutes:number;tool?:string;sections:{h:string;p?:string[];list?:string[];formula?:string;example?:string}[];sources?:{label:string;href:string}[];published?:string;updated?:string};
const baseGuides:Guide[]=[
{slug:'what-is-roi',title:'What Is ROI? Formula, Example, and Practical Interpretation',description:'A practical explanation of return on investment, including the formula, example, and limits of the metric.',cat:'marketing',minutes:7,tool:'roi-calculator',sections:[
{h:'What ROI measures',p:['Return on investment compares the gain from an activity with the cost required to produce that gain. A positive ROI means the measured return exceeded the measured cost. A negative ROI means the measured return was lower than the cost.','ROI is only comparable when the inputs are defined consistently. If one project includes labor and platform fees while another includes only direct cash spend, their percentages do not describe the same scope.']},
{h:'The standard ROI formula',formula:'ROI = ((Revenue - Cost) / Cost) × 100',p:['Revenue minus cost is measured profit. Dividing that profit by cost shows the return relative to the amount invested.']},
{h:'Example',example:'A campaign costs $1,000 and produces $1,500 in attributed revenue. Profit is $500. ROI = ($500 / $1,000) × 100 = 50%.'},
{h:'What belongs in cost?',p:['Use a cost definition that matches the decision. A quick media comparison may use ad spend only. A broader business calculation may also include production, software, agency fees, shipping, payment fees, or other incremental costs.'],list:['Use the same scope when comparing alternatives.','Separate revenue from profit.','Avoid attributing unrelated revenue.','Document one-time and recurring costs when timing matters.']},
{h:'Why ROI is not enough by itself',p:['ROI does not show timing, risk, customer lifetime value, attribution uncertainty, or the size of the underlying investment. Pair it with metrics that match the decision you are making.']}
],sources:[{label:'Investor.gov: Return on Investment',href:'https://www.investor.gov/introduction-investing/investing-basics/glossary/return-investment-roi'}]},
{slug:'what-is-roas',title:'What Is ROAS? How Return on Ad Spend Works',description:'Understand ROAS, how to calculate it, and why margin matters when interpreting advertising performance.',cat:'marketing',minutes:6,tool:'roas-calculator',sections:[
{h:'ROAS in plain language',p:['ROAS compares attributed advertising revenue with advertising spend. A ROAS of 4.0 means four units of attributed revenue for every one unit of ad spend.']},
{h:'ROAS formula',formula:'ROAS = Attributed advertising revenue / Advertising spend'},
{h:'Example',example:'$8,000 attributed revenue / $2,000 ad spend = 4.0× ROAS, or 400%.'},
{h:'Why “good ROAS” has no universal number',p:['The required ROAS depends on gross margin, operating costs, repeat purchases, attribution rules, and business goals. A low-margin retailer usually needs a higher revenue multiple than a high-margin digital product.']},
{h:'Use ROAS with profit context',list:['Track gross margin alongside revenue.','Know the attribution window used by each platform.','Compare like-for-like campaigns.','Use ROI, acquisition cost, and conversion rate for additional context.']}
]},
{slug:'roi-vs-roas',title:'ROI vs ROAS: What Is the Difference?',description:'ROI and ROAS answer different questions. See the formulas and a side-by-side example.',cat:'marketing',minutes:6,tool:'roi-calculator',sections:[
{h:'The short answer',p:['ROAS compares advertising revenue with ad spend. ROI compares measured profit with the investment cost included in the calculation. ROAS is narrower and often used for media efficiency.']},
{h:'Formula comparison',formula:'ROAS = Ad-attributed revenue / Ad spend\nROI = ((Revenue - Cost) / Cost) × 100'},
{h:'One campaign, two numbers',example:'Spend $1,000 and produce $3,000 revenue. ROAS = 3.0×. If cost is $1,000, ROI = 200%.'},
{h:'Choose the metric for the question',p:['Use ROAS when the question is advertising revenue efficiency. Use ROI when the question is return relative to the cost scope you define.']}
]},
{slug:'click-through-rate-explained',title:'Click-Through Rate Explained: CTR Formula and Example',description:'Learn how click-through rate is calculated and why context matters when comparing CTR.',cat:'marketing',minutes:5,tool:'ctr-calculator',sections:[
{h:'What CTR tells you',p:['CTR measures the share of recorded impressions that produced a click. It describes interaction with a displayed item, not whether that click later created a sale.']},
{h:'CTR formula',formula:'CTR = (Clicks / Impressions) × 100'},
{h:'Example',example:'500 clicks from 25,000 impressions produces a 2% CTR.'},
{h:'Common mistakes',list:['Treating high CTR as proof of profitability.','Comparing channels with very different user intent.','Ignoring low-quality or accidental clicks.','Optimizing clicks while neglecting conversions.']}
]},
{slug:'what-is-json',title:'What Is JSON? Structure, Syntax, and a Practical Example',description:'A concise introduction to JSON, its value types, syntax rules, and formatting.',cat:'development',minutes:7,tool:'json-formatter',sections:[
{h:'What JSON is',p:['JSON stands for JavaScript Object Notation. It is a text format used to represent structured data and is widely used by APIs and configuration systems.']},
{h:'Basic value types',list:['Object: key-value pairs in curly braces.','Array: an ordered list in square brackets.','String: text in double quotes.','Number: integer or decimal.','Boolean: true or false.','Null: an explicit empty value.']},
{h:'Example',formula:'{\n  "name": "Veldeonix",\n  "active": true,\n  "tools": ["JSON Formatter", "UUID Generator"]\n}'},
{h:'Formatting versus validation',p:['Formatting changes whitespace for readability. Validation checks whether the input follows JSON syntax. Minification removes unnecessary whitespace while preserving the parsed structure.']}
],sources:[{label:'RFC 8259: JSON Data Interchange Format',href:'https://www.rfc-editor.org/rfc/rfc8259'}]},
{slug:'base64-encoding-explained',title:'Base64 Encoding Explained: What It Does and What It Does Not Do',description:'Understand Base64 encoding, common uses, UTF-8 considerations, and why Base64 is not encryption.',cat:'development',minutes:6,tool:'base64-encoder-decoder',sections:[
{h:'Base64 is an encoding',p:['Base64 represents binary data using printable characters. It changes representation but does not make the underlying information secret.']},
{h:'Base64 is not encryption',p:['Anyone with the encoded value can decode it without a secret key. Do not use Base64 as a confidentiality control for passwords, API keys, or private documents.']},
{h:'UTF-8 matters',p:['For Unicode text, a robust browser workflow converts text to UTF-8 bytes before encoding and reverses the process when decoding.']},
{h:'Common uses',list:['Text-safe representation of binary data.','Embedding small payloads in text formats.','Printable representation of binary tokens.']}
],sources:[{label:'RFC 4648: Base64 Data Encoding',href:'https://www.rfc-editor.org/rfc/rfc4648'}]},
{slug:'unix-timestamps-explained',title:'Unix Timestamps Explained: Seconds, Milliseconds, UTC, and Dates',description:'Learn what a Unix timestamp represents and why seconds and milliseconds are often confused.',cat:'development',minutes:6,tool:'unix-timestamp-converter',sections:[
{h:'What a Unix timestamp represents',p:['A Unix timestamp commonly represents elapsed seconds from the Unix epoch at 00:00:00 UTC on January 1, 1970.']},
{h:'Seconds versus milliseconds',p:['Many back-end systems use seconds while JavaScript Date values use milliseconds. Mixing the units can produce a date far from the intended year.']},
{h:'UTC and local time',p:['The timestamp refers to an instant. The browser can display that instant in UTC or in the user’s local timezone.']},
{h:'Practical checks',list:['Confirm the timestamp unit.','Keep timezone information when local wall-clock time matters.','Use ISO 8601 when a human-readable interchange value is useful.']}
]},
{slug:'strong-password-basics',title:'Strong Password Basics: Length, Randomness, and Safer Generation',description:'A practical guide to password generation, uniqueness, and secure randomness.',cat:'productivity',minutes:6,tool:'password-generator',sections:[
{h:'What makes a generated password useful',p:['A generated password should be difficult to predict and unique to the account where it is used. Length and randomness expand the possible search space.']},
{h:'Prefer a password manager for storage',p:['A password manager can generate and store unique credentials, reducing pressure to reuse memorable passwords.']},
{h:'Why browser randomness matters',p:['A password generator should use a cryptographically secure random source rather than a simple function designed for simulations or visual effects.']},
{h:'Safe workflow',list:['Generate locally.','Use a long value accepted by the service.','Store it in a trusted password manager.','Do not reuse it on another service.','Enable stronger authentication where available.']}
],sources:[{label:'NIST Digital Identity Guidelines',href:'https://pages.nist.gov/800-63-4/sp800-63b.html'}]}
];

const updatedSlugs = new Set(
  guideUpdates.map(guide => guide.slug)
);

export const guides: Guide[] = [
  ...baseGuides.filter(
    guide => !updatedSlugs.has(guide.slug)
  ),

  ...guideUpdates
];

export const getGuide = (slug: string) =>
  guides.find(guide => guide.slug === slug);
