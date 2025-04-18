---
name: 🚀 Feature request
description: Suggest an idea or enhancement for this project.
labels: [enhancement]
body:
  - type: markdown
    attributes:
      value: |
        # 🚀 Feature Request

        👋 Thanks for taking the time to suggest a new feature or enhancement!

        **Before submitting:**
        - 🔍 Please [search existing issues](https://github.com/HimanshuHegde/react-epic-trails-ds/issues) to avoid duplicates.
        - 📖 Review the [contributing guidelines](https://github.com/HimanshuHegde/react-epic-trails-ds/blob/main/CONTRIBUTING.md).

  - type: textarea
    id: problem-statement
    attributes:
      label: Problem statement
      description: |
        Is your feature request related to a problem?
        Describe the problem or frustration you're experiencing.
      placeholder: "I'm always frustrated when..."
    validations:
      required: true

  - type: textarea
    id: proposed-solution
    attributes:
      label: Proposed solution
      description: |
        Describe the feature you'd like to see and how it should work.
      placeholder: "A possible solution would be..."
    validations:
      required: true

  - type: textarea
    id: alternatives
    attributes:
      label: Alternatives considered
      description: |
        Have you considered alternative approaches? Share them here.
      placeholder: "Another approach could be..."
    validations:
      required: false

  - type: textarea
    id: additional-context
    attributes:
      label: Additional context
      description: |
        Add any other details or context to help us better understand the request.
        Links, screenshots, and examples are welcome!
