

# Literate Programming Features Testing Notebook


## Introduction

This notebook exists to try out various features of literate programming in Emacs&rsquo; Org Mode. Specifically, it tests the results of:

-   using header arguments
-   naming and re-using a code block


## Header Arguments Settings

Header arguments control a lot of the behavior of:

-   evaluation—how the code is run and how the results are printed
-   exporting—how the code is exported to another format, like HTML
-   tangling—how and where the code goes when made into an executable

It can be set in several places, as we&rsquo;ll see:


### Setting Header Args Globally

We currently have the following set as our global configuration:

    (setq org-babel-default-header-args `((:results . "verbatim pp replace output")
                                          (:exports . "both")
                                          (:noweb . "strip-export")
                                          (:session . "none")
                                          (:eval . "no-export")))

A *reasonably good* resource to see what each of those do is [the docs for header args](https://org-babel.readthedocs.io/en/latest/header-args/).


### Setting Header Args Per File

You can set header args for the current file using the following syntax at the start of the file:

    #+PROPERTY: header-args    :results silent

This file currently has the following set:

    #+PROPERTY: header-args :var x=2

This sets that header arg for the whole file, overriding anything set globally. In this case, this means that we have a value called `x` with the value `1` that we can read in any code block, like so:

    console.log(x)

    2

Note that it is a good idea to re-evaluate the file-level properties after adding or changing them, using `org-ctrl-c-ctrl-c`.


### Setting Header Args Per Tree

You can also add header args to a tree, overriding anything set more generally. You must add these header args as the *very* first child of the tree.

This is the syntax:

    :PROPERTIES:
    :header-args: :var x=5
    :END:

This tree has that header arg, so despite setting `x` as having a value of `2` in the file, it should have the value of `5` here.

    console.log(x)

    5


### Setting Header Args Per Code Block

You can also set individual code blocks to have their own header args, again overriding anything set more generally.

Here is the syntax:

    #+begin_src js :var x=8
    console.log(x)
    #+end_src

The following code block has its header arg set exactly like the above.

    console.log(x)

    8

And voila.


## Naming And Re-Using Code Blocks

You can name a code block by giving it a name field, like so:

    #+NAME: vars
    #+begin_src js
    const y = 7;
    #+end_src

The following block has exactly that setup:

    const y = 7;

Then, you can include the code from the named block using `noweb` syntax of using `<<[name of block]>>`:

    #+begin_src js
    <<vars>>
    console.log("y is: " + y)
    #+end_src

Which results in the following block and its results:

    
    console.log("y is: " + y)

    y is: 7

An important thing to note is the setup required for this. Globally, we have the following relevant header:

    (setq org-babel-default-header-args `((:noweb . "strip-export")))

The `noweb: strip-export` option does two things: allows each block to reference other named blocks, and strips the inclusion of the named block from the export process.

Whether to export the referenced block can be overridden on a file- or tree- or block-level basis. In fact, I did it above so I could print out `<<vars>>` instead of stirpping it out!

