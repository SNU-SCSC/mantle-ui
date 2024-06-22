# Mantle UI Documentation

## Introduction

Welcome to the documentation for Mantle UI, a wrapper library of Radix UI components, designed for use in SNU Computer Study Club's webpages.

## Getting Started

To get started with Mantle UI, you'll need to install the library and import it into your project. Follow the steps below:

1. Install Mantle UI using yarn:

   ```bash
   yarn add https://gitpkg.now.sh/SNU-SCSC/mantle-ui/dist?dev-minho-jeong
   ```

2. Import styles in your project's entry file (e.g., `index.tsx`):

   ```tsx
   import "mantle-ui/index";
   ```

3. Start building

You are now ready to use Mantle UI theme components.

## Components

Mantle UI provides several components to enhance your web application's user interface. Here are some of the key components:

### Buttons

Buttons are used to trigger actions or navigate to different parts of your application. They can have different styles, such as primary, secondary, or outlined. You can customize their appearance and behavior according to your needs.

#### Props

- `color`: Specifies the color of the button. Check [Radix UI's color palette](https://www.radix-ui.com/themes/docs/theme/color) for available colors.
- `accent`: Defaults to `false`. Specifies whether the button should have an accent color.

Example usage:

```tsx
import Button from "mantle-ui/components/button/Button";

const MyComponent = () => {
  const handleClick = () => {
    // handle button click
  };

  return (
    <div>
      <Button onClick={handleClick} color="blue" accent>
        Click me
      </Button>
      <Button onClick={handleClick} color="red">
        Click me
      </Button>
    </div>
  );
};
```

### Dropdowns

Dropdowns allow users to select options from a list. They are commonly used for selecting values from a predefined set of choices. You can customize the dropdown's appearance and behavior, including the options available and the selected value.

#### Props

- `subject`: Specifies the subject of the dropdown.
- `items`: Specifies the items available in the dropdown.
- `onSelect`: Specifies the function to call when an item is selected.

Example usage:

```tsx
import BoardDropdown from "mantle-ui/components/dropdown/Dropdown";

const MyComponent = () => {
  const handleClick = () => {
    // handle button click
  };

  return (
    <div>
      <BoardDropdown
        subject="Number of Pages"
        items={["10", "20", "50"]}
        onSelect={(s) => {
          console.log(s);
        }}
      ></BoardDropdown>
    </div>
  );
};
```

### Inputs

Inputs are used for capturing user input, such as text, numbers, or dates. They can be single-line or multi-line (textareas). You can customize their appearance, validation rules, and behavior, such as handling user input events.

#### Props

- `label`: Optional prop that specifies the label for the input.

Example usage:

```tsx
import BoardDropdown from "mantle-ui/components/dropdown/Dropdown";

const MyComponent = () => {
  const handleClick = () => {
    // handle button click
  };

  return (
    <div>
      <TextInput label="Name" placeholder="Enter your name"></TextInput>
    </div>
  );
};
```

### Paginations

Paginations are used to navigate through a large set of data or content that is divided into multiple pages. They typically include previous and next buttons, as well as page numbers or a scrollable list of pages. You can customize the pagination's appearance and behavior, such as the number of items per page.

#### Props

- `totalPages`: Specifies the total number of pages.
- `onPageChange`: Specifies the function to call when the page changes.

Example usage:

```tsx
import BoardDropdown from "mantle-ui/components/dropdown/Dropdown";

const MyComponent = () => {
  const handleClick = () => {
    // handle button click
  };

  return (
    <div>
      <BoardPagination
        totalPages={100}
        onPageChange={(page) => console.log(page)}
      ></BoardPagination>
    </div>
  );
};
```

### Textareas

Textareas are multi-line inputs that allow users to enter longer text or comments. They are commonly used for capturing user feedback, descriptions, or other types of free-form text. You can customize their appearance, validation rules, and behavior, such as handling user input events.

#### Props

- `label`: Optional prop that specifies the label for the textarea.
- `resizable`: Defaults to `false`. Specifies whether the textarea should be resizable.

Example usage:

```tsx
import BoardDropdown from "mantle-ui/components/dropdown/Dropdown";

const MyComponent = () => {
  const handleClick = () => {
    // handle button click
  };

  return (
    <div>
      <TextArea
        label="Description"
        placeholder="Enter your description"
      ></TextArea>
    </div>
  );
};
```
