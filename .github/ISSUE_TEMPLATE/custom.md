---
name: 🧩 Custom Issue
description: File a general issue (bug, feature, question, etc.)
labels: [needs-triage]
assignees: ''
body:
  - type: markdown
    attributes:
      value: |
        ## 🧠 Custom Issue Template

        Thank you for submitting an issue! Please complete the form below to help us understand and address your issue effectively.

  - type: dropdown
    id: issue-type
    attributes:
      label: Type of issue
      description: What kind of issue are you submitting?
      options:
        - 🐛 Bug
        - 🚀 Feature Request
        - ❓ Question
        - 💡 Idea
        - 📄 Documentation
      default: 0
    validations:
      required: true

  - type: textarea
    id: summary
    attributes:
      label: Summary
      description: A short and clear summary of your issue.
      placeholder: "e.g., The Button component crashes on press..."
    validations:
      required: true

  - type: textarea
    id: context
    attributes:
      label: Additional context
      description: Add any relevant details, logs, screenshots, or links that help explain the issue.
      placeholder: "Include stack traces, links to related issues, or screenshots if available."

  - type: input
    id: version
    attributes:
      label: Package/Library version
      description: What version of the project/library are you using?
      placeholder: "e.g., 1.2.3"

  - type: textarea
    id: steps
    attributes:
      label: Steps to reproduce (for bugs)
      description: Provide clear instructions to reproduce the issue. If this isn’t a bug, you can skip this.
      placeholder: |
        1. Go to '...'
        2. Click on '...'
        3. See the error
    validations:
      required: false

  - type: textarea
    id: expected
    attributes:
      label: Expected behavior
      description: Describe what you expected to happen.
      placeholder: "e.g., The component should render without throwing errors."

  - type: textarea
    id: solution
    attributes:
      label: Suggested solution (optional)
      description: If you have any ideas about how to solve the problem, please describe them here.

  - type: checkboxes
    id: checklist
    attributes:
      label: Checklist
      description: Confirm you've done the following before submitting.
      options:
        - label: I have searched the existing issues.
        - label: I am using the latest version.
        - label: I have included all necessary information.
