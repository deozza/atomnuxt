# toolbox

Toolbox (this should have a better name when I will have imagination) is a project that takes Nuxtjs and push it to the limits of atomic design and component driven development.

## Table of contents

## Origin of the project

Before using toolbox, when I needed to build a website for school or personal projects
  1. create new project
  2. write down again and again the same HTML structures
  3. organize these structure
  4. apply the same basic CSS for browser reset, elements size or flexbox
  5. apply specific CSS according to graphical chart

I am a developer, therefore I am lazy, and parts 1 to 4 of that story are really boring. So I decided to create a boilerplate with ready to use components.

Now, using toolbox, for the same projects : 
  1. fork toolbox
  2. organize components
  3. apply specific CSS according to graphical chart
  
Much faster and much organized. 

## How to use

### For testing

### For production

## List of components

### Atoms

An atom is a very small HTML structure that can't be more stripped down without using the basic HTML element itself. An atom comes with its own properties (used to customise its style) and some basic responses to actions.

Most of the time, an atom would compose a molecule. But you can use an atom on its own on a page.

For now, this is the list of the available atoms : 
 * inputs
   * text input
   * select input
 * link
 * typography
   * header
   * paragraph
 * button

To know more about atoms, you can read [this](./components/Atoms/README.md).

### Molecules

A molecule is a group of organized atoms in order to form a more complex HTML structure. A molecule comes with its own properties (used to customise its style) and some basic responses to actions.

Multiple molecules are used to build a page.

For now, this is the list of the available molecules : 
 * menu
 * table
 * form

To know more about atoms, you can read [this](./components/Molecules/README.md).

## What's next ?
