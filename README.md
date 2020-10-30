# dog-phrase

Under development.

## Description

We will provide an overview of the project after the first draft is stable

## Status

* We have completed an alpha version of the API that is rough but functional
* API will still be changing as we refine it

## We arrived at a fixed salt

`$2a$12$3B0n8rXlKFEUseZi4kGmge`

We arrived at 12 round salt because it is slow enough to have a noticeable pause for current computer, but not too slow to cause usability issues. As hardware become more advanced, the hashing will become less effective against brute force attack. However, we have to assume that if the hardware advance can render 12 round salt vulnerable, it can also render 14 round salt vulnerable.

A 16 round salt currently takes about 15 seconds on my computer, which is simply too long for usability.
