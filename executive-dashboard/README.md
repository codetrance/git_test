# One Digital Operating Review

Executive dashboard for the Enterprise Systems / Digital PMO weekly management rhythm.
Open `index.html` in a browser. It is a single file with no build step. `dashboard.html` is the same page without the document wrapper, used for publishing.

## Views (progressive disclosure: Executive → Portfolio → Program → Initiative → work item)

| Level | View | Answers |
|---|---|---|
| Executive | Weekly Brief | Thursday update: CQDIP status and why, wins, issues with owner and escalation, decisions, milestones, people. Two-way split (segment ↔ central Digital). |
| Executive | Scorecard | 19 KPIs across Cost, Quality, Delivery, Innovation, People, each with target, trend, owner, source and data confidence, plus a segment heatmap. |
| Portfolio | Spend & Value | Budget / actual / forecast across Run, Operate, Build, Transform, Innovate; run vs. change; cost types; "what did we get for the money" (last closed month). |
| Portfolio | Programs | All programs with common RAG rules; click a row for program → initiatives → Jira/Asana epics. |
| Portfolio | Workforce & Vendors | FTE vs. contractor by team, central effort by segment, vendor accountability scorecard (QBR input). |
| Portfolio | Technology Efficiency | SAP licence fact base (purchased / assigned / active / Flexera), then Workday, Salesforce, etc. |
| Governance | Issues (A3) | Issue → impact → actions → owner → timeline → escalation. |
| Governance | Operating Model | Weekly cadence, hub roll-up, data sources and confidence, One Digital Platform gap assessment, phased roadmap. |

The **View for** selector recalculates every view for a segment. **Draft Thursday summary** generates the email-ready executive summary from the same data.

## Replacing the sample data

All data sits in the `DATA` block at the top of the script (`SPEND`, `PROGRAMS`, `KPIS`, `TEAMS`, `VENDORS`, `SAP_LIC`, `WINS`, `RISKS`, `MILESTONES`, `PEOPLE`, `DECISIONS`, `A3S`). Each block maps to one source system listed in the Operating Model view. Every figure in the current file is illustrative.
