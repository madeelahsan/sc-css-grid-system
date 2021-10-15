# sc-css-grid-system

Simple CSS grid system component built with styled component for react.

## Demo

storybook [link](https://optimistic-shannon-061c79.netlify.app/)

## Installation

Using npm:

```
$ npm install sc-css-grid-system --save-dev
```

## Usage

sc-css-grid-system utilizes the power of CSS grid and styled-components to easily create responsive grids.

### For a simple 12 column layout:

```javascript
import {Grid} from 'sc-css-grid-system';

function CssGridSystem() {
    return (
        <Grid xs={12}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
        </Grid>
    );
}
```

Render as:
![12 column layout](https://i.imgur.com/4bicY1T.png)

### Grid column span:

```javascript
import {Grid, GridCol} from 'sc-css-grid-system';

function CssGridSystem() {
    return (
        <Grid xs={5} gap={30}>
            <GridCol>1</GridCol>
            <GridCol xs={2}>2</GridCol>
            <GridCol>3</GridCol>
            <GridCol>4</GridCol>
        </Grid>
    );
}
```

render as:
![col span example](https://i.imgur.com/YhY5SZ5.png)

### Responsive Grid:

```javascript
import {Grid, GridCol} from 'sc-css-grid-system';

function CssGridSystem() {
    return (
        <Grid xs={2} sm={3} md={4} lg={6} xl={12} gap={30}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
        </Grid>
    );
}
```

render as:

![Hnet-image (1)](https://user-images.githubusercontent.com/21342152/133593532-e4ba26fd-19e9-4b14-a919-d6d23b39a1bb.gif)

## Grid Breakpoints

| xs     | sm     | md     | lg     | xl      |
| ------ | ------ | ------ | ------ | ------- |
| <576px | ≥576px | ≥768px | ≥992px | ≥1200px |

## Props

### Grid Props

| Name     | Type   | Description                                |
| -------- | ------ | ------------------------------------------ |
| xs       | number | numbers of columns when screen is <576px   |
| sm       | number | numbers of columns when screen is >=576px  |
| md       | number | numbers of columns when screen is >=768px  |
| lg       | number | numbers of columns when screen is >=992px  |
| xl       | number | numbers of columns when screen is >=1200px |
| gap      | number | gap/gutter between grid rows and columns   |
| gap      | object | rseponsive gap/gutter    |
| rowGap   | number | gap/gutter between grid rows               |
| colGap   | number | gap/gutter between grid columns            |
| colWidth | number | minimum column width                       |

### GridCol Props

| Name | Type   | Description                                            |
| ---- | ------ | ------------------------------------------------------ |
| xs   | number | make an element span n columns when screen is <576px   |
| sm   | number | make an element span n columns when screen is >=576px  |
| md   | number | make an element span n columns when screen is >=768px  |
| lg   | number | make an element span n columns when screen is >=992px  |
| xl   | number | make an element span n columns when screen is >=1200px |

## License

MIT
