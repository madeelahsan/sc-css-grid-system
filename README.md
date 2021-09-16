# sc-css-grid-system

Simple CSS grid system component built with styled component

## Installation

Using npm:

```
$ npm install sc-css-grid-system --save-dev
```

## Getting started

sc-css-grid-system utilizes the power of CSS grid and styled-components to easily create responsive grids.

For a simple 12 column layout:

```javascript
import {Grid, GridCol} from 'sc-css-grid-system';

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
