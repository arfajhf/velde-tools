
import type { Guide } from './guides';

export const guideUpdates: Guide[] = [
  // ==================================================
  // GUIDE 01: CPC AND CPM
  // ==================================================
  {
    slug: 'how-to-calculate-cpc-and-cpm',
    title:
      'How to Calculate CPC and CPM: Formulas, Examples, and Key Differences',
    description:
      'Learn how to calculate CPC and CPM using simple formulas and practical advertising examples. Understand their differences, limitations, and how to compare campaign costs.',
    cat: 'marketing',
    published: '2026-09-21',
    updated: '2026-09-21',
    minutes: 9,
    tool: 'cpm-cpc-calculator',
    sections: [
      {
        h: 'Understanding CPC and CPM in Digital Advertising',

        p: [
          'Digital advertising platforms report several metrics that help advertisers understand how their budgets are being spent. Two commonly used metrics are cost per click (CPC) and cost per thousand impressions (CPM). Although both describe advertising costs, they measure different aspects of campaign performance.',

          'CPC measures the average advertising cost associated with each recorded click. CPM measures the average cost of displaying an advertisement one thousand times. These metrics help advertisers understand the relationship between spending, exposure, and user interaction.',

          'For example, an advertiser running a search campaign may examine CPC to understand the cost of generating visits. An advertiser running a brand awareness campaign may use CPM to evaluate the cost of reaching an audience through ad impressions.',

          'Neither metric independently determines whether a campaign is profitable. Advertisers must also consider conversions, revenue, attribution, and other relevant business costs.'
        ]
      },

      {
        h: 'What Is Cost Per Click (CPC)?',

        p: [
          'Cost per click is the average amount of advertising spend divided by the number of recorded clicks. It helps advertisers understand how much they spend, on average, to generate a click during a selected reporting period.',

          'For campaigns that charge advertisers per click, the actual amount charged for individual clicks may vary. Average CPC summarizes these costs across the selected clicks.',

          'A click does not necessarily represent a completed website visit, qualified lead, or purchase. Some users may leave before the destination page loads, while others may visit without completing the intended action.'
        ]
      },

      {
        h: 'CPC Formula',

        formula:
          'CPC = Total Advertising Cost / Total Clicks',

        p: [
          'To calculate average CPC, divide the total advertising cost by the number of recorded clicks for the same campaign and reporting period.',

          'The calculation requires a click count greater than zero. If a campaign has recorded no clicks, its average CPC is undefined rather than zero.'
        ]
      },

      {
        h: 'CPC Calculation Example',

        example:
          'Advertising spend: $240\n' +
          'Recorded clicks: 600\n\n' +
          'CPC = $240 / 600\n' +
          'CPC = $0.40 per click',

        p: [
          'Suppose an online store spends $240 on a campaign that receives 600 recorded clicks. Its average CPC is $0.40.',

          'This result means the campaign spent an average of forty cents for each recorded click. It does not establish how many purchases occurred or whether the campaign generated a positive financial return.',

          'To evaluate the commercial outcome, the advertiser would also need conversion data, attributed revenue, and relevant operating costs.'
        ]
      },

      {
        h: 'What Is Cost Per Thousand Impressions (CPM)?',

        p: [
          'CPM measures the average advertising cost for every one thousand recorded impressions. An impression generally represents an instance in which an advertisement is shown according to the reporting platform’s measurement rules.',

          'Unlike CPC, CPM does not require users to click an advertisement. It is useful for describing the cost of ad exposure, particularly when advertisers are evaluating awareness or reach-oriented campaigns.',

          'However, impressions are not the same as unique people. One person may generate several impressions. Recorded impressions also differ from viewable impressions, which follow specific viewability measurement rules.'
        ]
      },

      {
        h: 'CPM Formula',

        formula:
          'CPM = (Total Advertising Cost / Total Impressions) × 1,000',

        p: [
          'Divide total advertising spend by the recorded impressions and multiply the result by one thousand. Use figures from the same campaign and reporting period.',

          'If the impression count is zero, CPM cannot be calculated. Do not substitute zero as the result of a division by zero.'
        ]
      },

      {
        h: 'CPM Calculation Example',

        example:
          'Advertising spend: $240\n' +
          'Recorded impressions: 80,000\n\n' +
          'CPM = ($240 / 80,000) × 1,000\n' +
          'CPM = $3.00',

        p: [
          'Suppose the same campaign spends $240 and records 80,000 impressions. Its average CPM is $3.00.',

          'This means the campaign spent an average of three dollars for every one thousand recorded impressions.',

          'The figure describes exposure cost. It does not indicate how many unique individuals saw the advertisement, how many users clicked it, or how many sales resulted from the campaign.'
        ]
      },

      {
        h: 'CPC vs CPM: What Is the Difference?',

        p: [
          'The main difference between CPC and CPM is the denominator used in the calculation. CPC divides advertising cost by recorded clicks, while CPM divides the same cost by impressions and expresses the result per thousand impressions.',

          'CPC helps describe the cost associated with recorded clicks. CPM helps describe the cost associated with recorded ad exposure. Both can be calculated for a campaign when the necessary advertising data is available.',

          'A campaign can have a relatively low CPM but a high CPC if many impressions produce few clicks. A campaign with stronger click-through activity may produce a lower CPC even when its CPM is higher.'
        ],

        example:
          'Campaign A:\n' +
          'Spend: $200\n' +
          'Impressions: 100,000\n' +
          'Clicks: 200\n' +
          'CPM: $2.00\n' +
          'CPC: $1.00\n\n' +
          'Campaign B:\n' +
          'Spend: $200\n' +
          'Impressions: 50,000\n' +
          'Clicks: 500\n' +
          'CPM: $4.00\n' +
          'CPC: $0.40\n\n' +
          'Campaign A has a lower CPM, while Campaign B has a lower CPC. Neither result alone establishes which campaign generated more profit.'
      },

      {
        h: 'How CPC, CPM, and CTR Are Connected',

        p: [
          'Click-through rate (CTR) measures the percentage of recorded impressions that result in clicks. When CPC, CPM, and CTR use the same spending, impression, and click data, they have a mathematical relationship.',

          'For example, a campaign with a $5 CPM and a 1% CTR produces approximately ten clicks per one thousand impressions. Dividing the five-dollar cost by ten clicks gives an average CPC of $0.50.',

          'This relationship is useful for checking campaign calculations. However, comparisons may differ when advertising platforms use different definitions of clicks, impressions, costs, or reporting periods.'
        ],

        formula:
          'CTR (%) = (Clicks / Impressions) × 100\n' +
          'CPC = CPM / (10 × CTR (%))'
      },

      {
        h: 'How to Calculate CPC and CPM Using Veldeonix',

        p: [
          'Veldeonix provides a free browser-based calculator for working with common advertising cost metrics. You can use it to calculate CPC and CPM without manually dividing large campaign figures.'
        ],

        list: [
          'Open the CPM & CPC Calculator.',
          'Enter the total advertising cost for the selected period.',
          'Enter the recorded impressions and clicks.',
          'Calculate the results using the available inputs.',
          'Compare the results with the figures reported by your advertising platform.'
        ]
      },

      {
        h: 'Common Mistakes When Calculating Advertising Costs',

        list: [
          'Combining spending from one reporting period with clicks or impressions from another.',
          'Confusing average CPC with the maximum CPC bid configured in an advertising platform.',
          'Treating every recorded impression as a unique person.',
          'Assuming a lower CPC automatically means higher profitability.',
          'Comparing campaigns without considering their audiences, objectives, and attribution settings.',
          'Ignoring conversion quality and revenue when evaluating advertising costs.'
        ]
      },

      {
        h: 'Frequently Asked Questions',

        p: [
          'What does a $2 CPM mean? A $2 CPM means the campaign spent an average of two dollars for every one thousand recorded impressions.',

          'Can CPC and CPM be calculated for the same campaign? Yes. When advertising spend, clicks, and impressions are available, both metrics can be calculated using the relevant formulas.',

          'Does a low CPC guarantee more sales? No. CPC measures the average cost per recorded click. Purchases also depend on factors such as visitor intent, the offer, and the effectiveness of the destination website.',

          'Is CPM the same as viewable CPM? No. Standard CPM uses recorded impressions, while viewable CPM uses impressions that meet the relevant viewability criteria.',

          'Can I calculate CPC without clicks? No. When the recorded click count is zero, the average CPC calculation is undefined.'
        ]
      },

      {
        h: 'Final Thoughts',

        p: [
          'CPC and CPM describe two different dimensions of advertising cost. CPC measures the average cost per click, while CPM measures the average cost per thousand impressions.',

          'Use the metrics alongside CTR, conversion data, and financial results to understand campaign performance. Define your measurement period and data sources consistently before comparing campaigns.'
        ]
      }
    ],

    sources: [
      {
        label: 'Google Ads: Average Cost Per Click',
        href: 'https://support.google.com/google-ads/answer/14074?hl=en'
      },
      {
        label: 'Google Ads: Cost Per Thousand Impressions',
        href: 'https://support.google.com/google-ads/answer/6310?hl=en'
      },
      {
        label: 'Google Ads: Advertising Performance Metrics',
        href: 'https://support.google.com/google-ads/answer/2454071?hl=en'
      }
    ]
  },

  // ==================================================
  // GUIDE 02: HOW TO CALCULATE ROAS
  // ==================================================
  {
    slug: 'what-is-roas',

    title:
      'How to Calculate ROAS: Formula, Examples, and Common Mistakes',

    description:
      'Learn how to calculate return on ad spend using practical campaign examples. Understand ROAS formulas, break-even ROAS, attribution, and common reporting mistakes.',

    cat: 'marketing',
    published: '2026-09-21',
    updated: '2026-09-21',

    minutes: 9,

    tool: 'roas-calculator',

    sections: [
      {
        h: 'What Is Return on Ad Spend (ROAS)?',

        p: [
          'Return on ad spend, commonly abbreviated as ROAS, measures the advertising revenue attributed to a campaign relative to its advertising cost. It helps advertisers understand the revenue associated with each unit of advertising spend.',

          'For example, a ROAS of 4 means the reported campaign generated four dollars in attributed revenue for every dollar spent on advertising. The same value can be expressed as 4:1 or 400%.',

          'ROAS is a revenue-based metric. It does not directly calculate business profit because advertising spend is only one of the costs a business may incur to generate and fulfill a sale.',

          'Advertisers can use ROAS to examine campaigns, advertising channels, or reporting periods. However, comparisons should use consistent revenue attribution rules and cost definitions.'
        ]
      },

      {
        h: 'How to Calculate ROAS',

        p: [
          'The standard ROAS calculation divides the revenue attributed to advertising by the advertising cost associated with that revenue.',

          'Use the same currency for revenue and advertising spend. Make sure both figures cover compatible reporting periods and attribution rules.'
        ],

        formula:
          'ROAS = Advertising Revenue / Advertising Spend\n' +
          'ROAS (%) = (Advertising Revenue / Advertising Spend) × 100',

        example:
          'Advertising revenue: $8,000\n' +
          'Advertising spend: $2,000\n\n' +
          'ROAS = $8,000 / $2,000\n' +
          'ROAS = 4.0×\n' +
          'ROAS = 400%'
      },

      {
        h: 'Step-by-Step ROAS Calculation Example',

        p: [
          'Consider an online store that runs a paid advertising campaign over a selected reporting period. The store spends $1,500 on advertising and reports $6,000 in revenue attributed to that campaign.',

          'First, identify the total advertising spend. Second, identify the revenue attributed to the campaign. Third, divide attributed revenue by advertising spend.',

          'Dividing $6,000 by $1,500 produces a ROAS of 4.0. This is equivalent to a 400% ROAS.',

          'The result means the campaign generated four dollars in attributed revenue for every dollar of advertising spend. It does not mean the business earned four dollars of profit for every dollar spent.'
        ],

        example:
          'Ad spend: $1,500\n' +
          'Attributed revenue: $6,000\n\n' +
          'ROAS = 6,000 / 1,500\n' +
          'ROAS = 4.0×\n\n' +
          'Revenue per $1 of advertising spend: $4.00'
      },

      {
        h: 'How to Interpret Your ROAS',

        p: [
          'ROAS describes revenue efficiency relative to advertising spending. A 2× ROAS means attributed revenue is twice the ad spend. A 5× ROAS means attributed revenue is five times the ad spend.',

          'However, the ROAS required for a campaign to contribute to profit varies with product margins, fulfillment costs, payment fees, returns, and other expenses.',

          'Two businesses with identical ROAS values may have different profitability because their operating costs differ. A business selling a product with a narrow contribution margin generally needs more revenue per advertising dollar to cover its costs than a business with a wider contribution margin.',

          'Evaluate ROAS together with your actual costs and the business outcome you want to measure.'
        ]
      },

      {
        h: 'What Is Break-Even ROAS?',

        p: [
          'Break-even ROAS is the revenue-to-ad-spend ratio at which the contribution remaining after non-advertising variable costs exactly covers advertising spend.',

          'For a simple calculation, divide one by the contribution margin before advertising. This assumes the revenue and cost definitions are consistent and that the selected contribution margin includes the relevant variable costs other than advertising.',

          'For example, if a business retains 40% of revenue after relevant non-advertising variable costs, it needs a ROAS of 2.5× for that contribution to cover its advertising spend.',

          'This simplified calculation does not automatically include fixed overhead, taxes, financing costs, or other expenses. Include the costs relevant to the decision when calculating a broader business break-even point.'
        ],

        formula:
          'Break-Even ROAS = 1 / Contribution Margin\n' +
          'Contribution Margin = 0.40\n' +
          'Break-Even ROAS = 1 / 0.40 = 2.5×',

        example:
          'Revenue: $5,000\n' +
          'Contribution margin before advertising: 40%\n' +
          'Contribution available before ad spend: $2,000\n' +
          'Advertising spend: $2,000\n\n' +
          'ROAS = $5,000 / $2,000 = 2.5×\n' +
          'Contribution after advertising: $0'
      },

      {
        h: 'Why a High ROAS Does Not Guarantee Profit',

        p: [
          'A campaign can generate revenue greater than its advertising spend and still produce a business loss. This happens when the remaining revenue is insufficient to cover the other relevant costs.',

          'Consider a campaign that generates $5,000 in attributed revenue from $1,000 in advertising spend. Its ROAS is 5×. If the products sold cost $3,500 to produce and fulfill, the campaign has $500 remaining before other operating costs.',

          'Now consider a different business with the same advertising revenue and ad spend, but $4,500 in production and fulfillment costs. Its remaining contribution after advertising is negative $500.',

          'The campaigns have identical ROAS values but different financial results. ROAS must therefore be interpreted alongside cost and margin information.'
        ],

        example:
          'Campaign revenue: $5,000\n' +
          'Advertising spend: $1,000\n' +
          'Other relevant costs: $4,500\n\n' +
          'ROAS = 5.0×\n' +
          'Measured result = $5,000 - $1,000 - $4,500\n' +
          'Measured result = -$500'
      },

      {
        h: 'How Attribution Affects Reported ROAS',

        p: [
          'Advertising platforms use attribution rules to assign conversion value to marketing interactions. Different attribution models and reporting windows can produce different revenue figures for the same underlying customer activity.',

          'For example, a customer may see an advertisement, later visit a website through organic search, and finally complete a purchase. The revenue attributed to the advertisement depends on the measurement system and attribution settings.',

          'Reported ROAS should not automatically be interpreted as the additional revenue that would disappear if advertising stopped. Establishing incremental impact requires an appropriate measurement approach, such as a controlled experiment or another suitable causal analysis.',

          'When comparing ROAS across advertising platforms, check whether each platform uses consistent attribution windows, conversion definitions, currencies, and reporting periods.'
        ]
      },

      {
        h: 'Common ROAS Calculation Mistakes',

        list: [
          'Confusing total store revenue with revenue attributed to the selected advertising campaign.',
          'Using revenue from one period and advertising spending from another without considering attribution timing.',
          'Treating ROAS as a direct measurement of net profit.',
          'Comparing platforms that use different attribution models or conversion windows.',
          'Ignoring refunds, canceled orders, or other adjustments that affect reported revenue.',
          'Using inconsistent currencies or reporting settings.',
          'Assuming that all attributed conversions were caused exclusively by advertising.',
          'Calculating ROAS with zero advertising spend and treating the result as a valid finite ratio.'
        ]
      },

      {
        h: 'Calculate ROAS With Veldeonix Labs',

        p: [
          'The Veldeonix ROAS Calculator helps you calculate the ratio and percentage using your campaign data. It performs the arithmetic directly in your browser.',

          'Enter attributed advertising revenue and advertising spend using the same currency. The calculator provides a numerical result based on the values you enter.',

          'The calculator does not independently verify attribution accuracy or determine whether your campaign is profitable. Use actual business cost data when evaluating profit.'
        ]
      },

      {
        h: 'Frequently Asked Questions',

        p: [
          'What does a 300% ROAS mean? It means the campaign generated three units of attributed revenue for every one unit of advertising spend.',

          'Is 4× ROAS profitable? Not necessarily. Profitability depends on product margins, other expenses, and the accuracy of reported revenue attribution.',

          'Can ROAS be lower than 1? Yes. A ROAS below 1 means attributed advertising revenue was lower than advertising spend.',

          'Is ROAS the same as ROI? No. ROAS compares attributed advertising revenue with advertising spend. ROI compares the measured net return with the investment cost included in the calculation.',

          'Can ROAS be calculated without advertising spend? The standard ratio is undefined when advertising spend is zero.'
        ]
      },

      {
        h: 'Conclusion',

        p: [
          'ROAS measures attributed advertising revenue relative to advertising spending. The standard calculation is simple, but interpreting the result requires accurate revenue attribution and an understanding of business costs.',

          'Use ROAS to examine advertising revenue efficiency, then evaluate contribution margin, ROI, and conversion performance to understand the broader financial outcome.'
        ]
      }
    ],

    sources: [
      {
        label: 'Google Ads: Advertising Performance Metrics',
        href: 'https://support.google.com/google-ads/answer/9451527?hl=en'
      },
      {
        label: 'Google Ads: Return on Investment',
        href: 'https://support.google.com/google-ads/answer/1722066?hl=en'
      }
    ]
  },

  // ==================================================
  // GUIDE 03: ROI VS ROAS
  // ==================================================
  {
    slug: 'roi-vs-roas',

    title:
      'ROI vs ROAS: Differences, Formulas, and When to Use Each Metric',

    description:
      'Understand ROI vs ROAS with clear formulas, practical campaign examples, and a comparison of revenue, profit, advertising costs, and financial performance.',

    cat: 'marketing',
    published: '2026-09-21',
    updated: '2026-09-21',

    minutes: 9,

    tool: 'roi-calculator',

    sections: [
      {
        h: 'ROI vs ROAS: The Main Difference',

        p: [
          'Return on investment (ROI) and return on ad spend (ROAS) are commonly used to evaluate business and advertising performance. Although their names are similar, they answer different questions.',

          'ROAS measures attributed advertising revenue relative to advertising spend. ROI measures the net return relative to the investment cost included in the calculation.',

          'ROAS focuses on revenue generated in relation to media spending. ROI provides a broader financial perspective when the calculation includes the relevant business costs associated with an investment.',

          'A campaign may report a high ROAS while generating a negative ROI when production, fulfillment, advertising, and other relevant costs exceed the revenue produced.',

          'Understanding the distinction helps marketers avoid treating advertising revenue as business profit.'
        ]
      },

      {
        h: 'What Is ROI?',

        p: [
          'ROI expresses net return as a percentage of the investment cost. It can be used to evaluate the financial outcome of a project, business activity, or advertising campaign.',

          'The exact cost definition depends on the question being evaluated. A campaign-level ROI calculation may include advertising spend, production, fulfillment, and other directly attributable expenses.',

          'If two calculations include different cost categories, their results should not be compared without accounting for those differences.'
        ],

        formula:
          'ROI (%) = ((Revenue - Total Relevant Cost) / Total Relevant Cost) × 100'
      },

      {
        h: 'What Is ROAS?',

        p: [
          'ROAS compares the revenue attributed to an advertising activity with the amount spent on that activity.',

          'The result is commonly presented as a multiple or percentage. A ROAS of 3× is equivalent to 300%, meaning the reported advertising revenue is three times the advertising cost.',

          'Unlike a broad ROI calculation, ROAS does not automatically account for product manufacturing, salaries, shipping, payment processing, or other expenses.'
        ],

        formula:
          'ROAS = Attributed Advertising Revenue / Advertising Spend\n' +
          'ROAS (%) = ROAS × 100'
      },

      {
        h: 'ROI vs ROAS: A Practical Comparison',

        p: [
          'Consider an online store that spends $1,000 on advertising and generates $4,000 in attributed sales. The store also incurs $2,500 in product, fulfillment, and other relevant costs.',

          'The ROAS calculation divides the $4,000 in revenue by the $1,000 advertising spend. The result is 4×, or 400%.',

          'For ROI, combine advertising spend with the other relevant costs. Total measured cost is $3,500. Subtracting this amount from revenue gives a measured profit of $500.',

          'Dividing the $500 profit by the $3,500 cost produces an ROI of approximately 14.29%.',

          'The campaign therefore reports a 4× ROAS and a 14.29% ROI. Both calculations are correct because they measure different financial relationships.'
        ],

        example:
          'Attributed revenue: $4,000\n' +
          'Advertising spend: $1,000\n' +
          'Other relevant costs: $2,500\n\n' +
          'ROAS = $4,000 / $1,000 = 4.0×\n\n' +
          'Total measured cost = $1,000 + $2,500\n' +
          'Total measured cost = $3,500\n\n' +
          'Measured profit = $4,000 - $3,500\n' +
          'Measured profit = $500\n\n' +
          'ROI = ($500 / $3,500) × 100\n' +
          'ROI = 14.29%'
      },

      {
        h: 'Can a Campaign Have High ROAS and Negative ROI?',

        p: [
          'Yes. A campaign can generate revenue several times greater than advertising spend while losing money after other relevant costs are included.',

          'Suppose a business spends $1,000 on advertising and reports $4,000 in attributed revenue. Its ROAS is 4×.',

          'If the business also incurs $3,500 in production, shipping, and other relevant costs, total measured cost becomes $4,500.',

          'The campaign produces a measured loss of $500 and an ROI of approximately negative 11.11%.',

          'This example demonstrates why ROAS should not be interpreted as a direct measure of profitability.'
        ],

        example:
          'Revenue: $4,000\n' +
          'Advertising: $1,000\n' +
          'Other relevant costs: $3,500\n\n' +
          'ROAS = 4.0×\n' +
          'Total measured cost = $4,500\n' +
          'Measured profit = -$500\n' +
          'ROI = (-$500 / $4,500) × 100\n' +
          'ROI = -11.11%'
      },

      {
        h: 'When Should You Use ROAS?',

        p: [
          'ROAS is useful when examining advertising revenue efficiency. Marketers can use it to compare attributed revenue against spending across campaigns or reporting periods.',

          'For example, an advertiser may calculate ROAS for two campaigns to understand the amount of attributed revenue associated with each advertising dollar.',

          'However, differences in product margins, attribution settings, and customer acquisition objectives can limit direct comparisons.',

          'Use ROAS alongside conversion rate, contribution margin, and other business metrics rather than making budget decisions from the ratio alone.'
        ]
      },

      {
        h: 'When Should You Use ROI?',

        p: [
          'ROI is useful when evaluating net financial return relative to an investment. It provides a broader perspective when the calculation includes all costs relevant to the decision.',

          'For example, a business evaluating an advertising campaign may calculate ROI after accounting for media spending, production, fulfillment, and other directly attributable costs.',

          'ROI can also be applied to business projects outside advertising. However, the calculation should clearly define the investment period, included costs, and measured return.',

          'A positive ROI indicates that measured return exceeds the defined investment cost. It does not automatically account for investment risk, timing, or alternative uses of capital.'
        ]
      },

      {
        h: 'How Contribution Margin Connects ROI and ROAS',

        p: [
          'Contribution margin describes the portion of revenue remaining after the relevant variable costs have been deducted. It helps explain how much revenue remains available to cover advertising and other expenses.',

          'When contribution margin is calculated before advertising costs, it can be used to estimate the minimum ROAS needed for that contribution to cover advertising spend.',

          'For example, a contribution margin of 25% means that twenty-five cents of each revenue dollar remains after the included non-advertising variable costs.',

          'Under this simplified model, a business needs four dollars of revenue per advertising dollar to cover the advertising cost. The corresponding break-even ROAS is 4×.',

          'This calculation assumes a consistent margin and does not automatically account for fixed overhead or other excluded costs.'
        ],

        formula:
          'Break-Even ROAS = 1 / Contribution Margin\n' +
          'Break-Even ROAS = 1 / 0.25 = 4.0×'
      },

      {
        h: 'Common Mistakes When Comparing ROI and ROAS',

        list: [
          'Treating attributed advertising revenue as net profit.',
          'Calculating ROI using advertising spend alone while describing the result as total business profitability.',
          'Comparing campaigns with different cost definitions or attribution windows.',
          'Ignoring refunds, product returns, fulfillment expenses, and transaction fees.',
          'Assuming a higher ROAS automatically indicates a higher ROI.',
          'Comparing calculations that use different currencies or reporting periods.',
          'Ignoring the uncertainty involved in assigning revenue to specific marketing activities.'
        ]
      },

      {
        h: 'Calculate ROI and ROAS With Veldeonix Labs',

        p: [
          'Veldeonix provides separate calculators for ROI and ROAS. Each tool uses a transparent formula and performs calculations directly in your browser.',

          'Use the ROI Calculator to compare measured revenue with the investment cost you define. Use the ROAS Calculator to examine attributed advertising revenue relative to advertising spend.',

          'For a meaningful comparison, document your included costs, revenue definition, and reporting period. The calculators perform arithmetic but do not independently validate the accuracy of your campaign data.'
        ]
      },

      {
        h: 'Frequently Asked Questions',

        p: [
          'Is ROI the same as ROAS? No. ROI compares measured net return with investment cost. ROAS compares attributed advertising revenue with advertising spend.',

          'Can ROAS be positive while ROI is negative? Yes. Revenue can exceed advertising spend while remaining insufficient to cover other relevant business costs.',

          'Does ROAS include product costs? The standard ROAS calculation uses attributed advertising revenue and advertising spend. Product costs are not included in the denominator.',

          'Can ROI exceed 100%? Yes. ROI exceeds 100% when measured net return is greater than the defined investment cost.',

          'Should ROI and ROAS use the same reporting period? Use compatible reporting periods and revenue definitions when comparing the financial results of the same activity.'
        ]
      },

      {
        h: 'Conclusion',

        p: [
          'ROI and ROAS measure different aspects of financial performance. ROAS describes attributed advertising revenue relative to media spending, while ROI evaluates measured net return relative to the cost included in the investment.',

          'Use ROAS to understand advertising revenue efficiency and ROI to evaluate financial return. Combining both metrics with accurate cost and attribution data provides a more complete understanding of campaign performance.'
        ]
      }
    ],

    sources: [
      {
        label: 'Google Ads: About Return on Investment',
        href: 'https://support.google.com/google-ads/answer/1722066?hl=en'
      },
      {
        label: 'Search Ads 360: Return on Investment',
        href: 'https://support.google.com/sa360/answer/9578325?hl=en'
      },
      {
        label: 'Google Ads: Campaign Performance Metrics',
        href: 'https://support.google.com/google-ads/answer/9451527?hl=en'
      }
    ]
  }
];