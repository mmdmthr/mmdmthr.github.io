---
title: "Lessons from a Global Hackathon: Building an AI for Certificate Extraction"
pubDate: 2025-06-14
description: ''
heroImage: '/blog-placeholder-2.jpg'
tags: 'notes'
---

A few weeks ago, I participated in an internal global hackathon—my first time joining one at an international scale. The event brought together participants from multiple regions including the UK, Denmark, and Australia–New Zealand. I took this opportunity to explore a practical application of AI: extracting data from certificate images.

### The Idea: Certified Certificate AI

From the list of pre-approved ideas, I joined a team working on *Certified Certificate AI*—a tool designed to help users upload and extract key information from certificate images (JPG format) into an existing cloud platform. The challenge was simple yet very real: reduce the need for manual input from physical documents.

We built the system using AWS infrastructure:

* **Frontend**: React
* **Backend**: API Gateway + Lambda
* **Storage**: S3
* **LLM**: Claude Sonnet 3.5 via Bedrock
* **Infra Deployment**: Terraform

This architecture enabled us to create a straightforward flow: upload image → extract data via LLM → output ready to be stored or synced to the existing cloud platform.

I contributed primarily to developing the React app and integrating it with the backend APIs. I also wrote a Node.js-based Lambda function to sync the extracted data to the platform.

---

### Challenges During Development

While the architecture looked simple on paper, building it revealed some nuanced and technical lessons—especially around scoping, AI model behavior, and practical constraints.

#### 1. Scoping: How Much Is Too Much?

A key discussion emerged early in the project—should we limit ourselves to demonstrating the data extraction step, or go all the way to syncing the data into the platform? I personally advocated for an end-to-end flow, but some team members preferred a smaller scope to keep the project lean and manageable. Ultimately, we aligned on a reduced scope to increase our chances of delivering a complete and working demo.

#### 2. Extracting Data: LLM vs Traditional OCR

I tested both LLM-based extraction and traditional OCR tools like Textract. Here's a brief comparison:

| Method  | Strengths                                      | Weaknesses                                     |
| ------- | ---------------------------------------------- | ---------------------------------------------- |
| **LLM** | Context-aware, flexible, understands structure | Highly prompt-dependent, can be inconsistent   |
| **OCR** | Fast, stable for printed text                  | Struggles with complex layouts and handwriting |

That said, both methods struggled with handwritten text—especially pencil-written entries, which were hard to read even for humans. However, when provided with a carefully crafted prompt and a predefined JSON schema, the LLM could often outperform OCR in identifying structured fields from certificates.

#### 3. Prompt Engineering Makes or Breaks the Output

The quality of the output heavily depended on how we phrased our *system* and *user prompts*. Even minor changes in wording produced dramatically different results. It became clear that building AI solutions isn't just about choosing the right model—it's also about learning how to "talk" to it.

#### 4. Image Size Constraints

Large images—either in file size or pixel dimensions—sometimes failed to process. On the flip side, overly compressed or small images hurt extraction accuracy. Finding the “sweet spot” for image quality and size took some trial and error.

---

### Key Takeaways and Considerations

Some important insights emerged outside the main scope of the project, but they’re worth exploring for future improvements:

* **Generalization Potential**: Automating certificate input might not sound groundbreaking, but the same approach could be applied to other document types—supplier invoices, accreditations, and more.
* **Scalability**: Bulk upload support would significantly reduce manual work for high-volume use cases.
* **Cross-Platform Integration**: We should consider mobile support, not just desktop/web. Integrating an image optimization step could also improve overall extraction performance.
* **Local Context Awareness**: Document structure and regulatory requirements may vary by country. What we build today should be flexible enough to adapt to future compliance needs.

---

### Beyond Just a Hackathon Project

To me, this was more than a weekend project. It was a microcosm of the challenges modern teams face when trying to bring AI into production—cross-functional collaboration, rapid iteration, choosing the right tools, and navigating differing opinions on scope.

More importantly, it wasn’t about winning or losing. It was about learning fast and building things that matter. And with the right intent, even a hackathon project can spark long-term value.
