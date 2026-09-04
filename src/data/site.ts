export const site = {
  name: 'FiscalDoor',
  domain: 'fiscaldoor.com',
  url: 'https://fiscaldoor.com',
  tagline: 'The door to your next round.',
  description:
    'FiscalDoor is a fractional CFO practice for venture-backed B2B companies moving from Series A through Series B to Pre-IPO. We build the financial model, valuation posture, and board reporting that survive real investor diligence.',
  eyebrow: 'Fractional CFO for Series A → B → Pre-IPO',
  contactEmail: 'hello@fiscaldoor.com',
} as const;

export const heroMetrics = [
  {
    value: '$420M+',
    label: 'in institutional capital raised by current and former clients',
    spark: [14, 19, 24, 22, 29, 36, 44, 52],
  },
  {
    value: '31',
    label: 'priced rounds closed while under a FiscalDoor engagement',
    spark: [2, 4, 5, 7, 9, 12, 16, 19],
  },
  {
    value: '±4%',
    label: 'average monthly forecast variance once a model is in place',
    spark: [22, 18, 15, 11, 9, 7, 5, 4],
  },
] as const;

export const services = [
  {
    number: '01',
    title: 'Fundraising Readiness & Investor Materials',
    summary: 'Get your model, metrics, and data room investor-ready before the raise starts, not during it.',
    body: 'Most raises lose momentum in diligence, not in the pitch meeting, when an investor finds a metric in the data room that does not match the deck. We align your financial model, cohort and retention numbers, and data room structure before a single investor conversation starts, and run mock diligence sessions so the hard questions about unit economics and runway get answered calmly instead of discovered live.',
    included: [
      'Investor-grade 3-statement model tied to your actual general ledger',
      'Data room structure and diligence checklist',
      'Cap table clean-up and scenario modeling',
      'Mock diligence sessions before real investor meetings',
    ],
  },
  {
    number: '02',
    title: 'Financial Modeling & Forecasting',
    summary: 'A model your board trusts enough to make decisions on, updated on a cadence, not rebuilt every quarter.',
    body: 'We build driver-based models tied to your actual revenue recognition and headcount plan, not a spreadsheet that only works until the first real assumption changes. Base, upside, and downside scenarios get reforecasted monthly against actuals, and the output gets translated into a board-ready narrative, so the model becomes a decision tool instead of a document nobody opens between raises.',
    included: [
      'Driver-based 3-statement model',
      'Monthly actuals-vs-plan variance analysis',
      'Scenario and sensitivity planning',
      'Runway and burn-multiple tracking',
    ],
  },
  {
    number: '03',
    title: 'Valuation & 409A Coordination',
    summary: 'A valuation posture that holds up in the boardroom, with employees, and with your next investor.',
    body: 'We coordinate directly with your 409A provider so the common-share valuation does not ambush your option pool or your next hire’s offer letter, and we build the narrative that connects your 409A, your primary valuation, and your actual growth trajectory into one consistent story. That story is what a board member repeats to a new investor, so it needs to hold together under a direct question, not just in a memo.',
    included: [
      '409A provider coordination and review',
      'Primary vs. 409A valuation narrative',
      'Cap table and option pool strategy',
      'Board-ready valuation memo',
    ],
  },
  {
    number: '04',
    title: 'Board & Investor Reporting',
    summary: 'Monthly and quarterly reporting that builds investor confidence, instead of just filling a deck template.',
    body: 'We build a board package and KPI dashboard sized to your actual stage, not a template borrowed from a company two rounds ahead of you, and we keep investor updates consistent and honest even in a month where the numbers are mixed. Reporting cadence itself becomes a trust-building tool: investors who get a clear, on-time update every month are the ones who show up fastest when you need them for the next round.',
    included: [
      'Monthly board package and KPI dashboard',
      'Quarterly investor update drafting',
      'Metric definitions your team and investors actually agree on',
      'Ad hoc board deck support around fundraise milestones',
    ],
  },
] as const;

export const stages = [
  {
    tag: 'Series A',
    title: 'Prove the model',
    desc: 'Financial hygiene and a first real forecast for a company that just closed, or is closing, its first institutional round. The goal is a model and a board package that survive the first real board meeting.',
  },
  {
    tag: 'Series B',
    title: 'Scale the metrics that matter',
    desc: 'Board reporting rigor and a sharper unit-economics story for a company scaling past its first round, now answering to a larger and more sophisticated investor base.',
  },
  {
    tag: 'Pre-IPO',
    title: 'Withstand the scrutiny',
    desc: 'Audit-readiness, SOX-lite process design, and IPO-grade reporting cadence for a company whose financials are about to be read by bankers and analysts, not just a board.',
  },
] as const;

export const fitCriteria = {
  good: [
    'You have raised, or are actively raising, a Series A or later institutional round',
    'You have, or are about to have, a board that expects real reporting',
    'You want a fractional CFO, not a full-time hire, at this stage',
    'You can commit to a minimum three-month engagement',
  ],
  bad: [
    'You are pre-seed or pre-revenue with no institutional round yet',
    'You need day-to-day bookkeeping, not strategic finance',
    'You want a one-time deliverable with no ongoing relationship',
    'You need someone on-site, full-time, five days a week',
  ],
} as const;

export const pricingTiers = [
  {
    name: 'Series A',
    price: '$6,500',
    period: '/mo',
    desc: 'Financial hygiene and a first real forecast for a company that just closed, or is closing, its first institutional round.',
    features: [
      'Investor-grade 3-statement model',
      'Monthly close and board package',
      'Cap table clean-up',
      'Fundraise data room support',
    ],
    featured: false,
  },
  {
    name: 'Series B',
    price: '$9,500',
    period: '/mo',
    desc: 'Board-grade reporting and dedicated fundraise support for a company scaling past its first institutional round.',
    features: [
      'Everything in Series A, plus:',
      'Driver-based forecasting with scenario planning',
      'Quarterly investor update drafting',
      '409A coordination',
      'Dedicated fundraise support for the round',
    ],
    featured: true,
  },
  {
    name: 'Pre-IPO',
    price: 'Custom',
    period: '',
    desc: 'Audit-readiness and IPO-grade reporting cadence for a company preparing for its next level of scrutiny.',
    features: [
      'Everything in Series B, plus:',
      'Audit-readiness review',
      'SOX-lite process design',
      'Banker and analyst-ready reporting',
      'Dedicated engagement lead',
    ],
    featured: false,
  },
] as const;

export const projectTypeOptions = [
  { value: '', label: 'Select one' },
  { value: 'series-a', label: 'Raising or closed Series A' },
  { value: 'series-b', label: 'Raising or closed Series B' },
  { value: 'pre-ipo', label: 'Preparing for Pre-IPO / IPO' },
  { value: 'not-sure', label: "Not sure yet, need a diagnostic" },
] as const;
