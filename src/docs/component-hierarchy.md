# Component hierarchy

- DGBagBuilder
  - BagGraphic
    - DiscGraphic??
  - DiscList
    - DiscInput
    - DiscListHeader
    - DiscListRow
      - EditableRowModeButtons
      - EditableDiscCell
      - EditableSpeedCell
      - EditableStabilityCell

changing data:

-initial list of discs (preset or empty) and their info (name, speed, stability)

-mode for each row

-user input for disc name, speed, and stability

-disc bag graphic

state:

-whole list

-edit mode

-input values for disc, speed, stability
