Trina is Artsy
==============
A portfolio website built from Jekyll. Based on [photorama](https://sunbliss.github.io/photorama/ "Photorama Demo"), heavily modified. 

## Local Development

There's some work you just can't do on the web, for this we must build the site locally:

```
$ bundle install
$ jekyll serve --watch
```

## Hosting
[Netlify](https://app.netlify.com/sites/trinaisartsy/) does a really good job so far and seems free for our uses. It triggers when we push to this repo's master, it is deigned for staticly generated content so it's suited well for this, it's free, and it doesn't block us in on what gems we can use. Will follow-up if they start trying to charge us. 

Originally we were using github pages but with the heavy file sizes of the gallery and not wanting to box Trina into any set tag or category taxonomy, we had to make a move.  

## Paypal Support

One of our goals is to give Trina an ecommerce presence, so we're using Paypal's hosted cart to bring in those basic features.

Prices are determiend in markdown front matter, images in art/ that do not have a related markdown file in _art/ will not be purchasable. A user sees a product they like in the gallery with a markdown (blue girl, for example), click 'Learn More', are redirected to the post page for that markdown file and they will find an add to cart button.

Would like to have a mini-cart, a 'full cart' icon that isn't just setting a cookie when someone clicks a link, etc. We might adopt their checkout.js and implement this a little more cleanly, but the virtue of the paypal buttons is they are basically just the embedables. 

## Thumbnails

Thumbnails of images in art/ are generated to art/thumbs/ during the build process. Images that already exist in art/thumbs are ignored, so you can speed things up a bit by commiting art/thumbs/ from time to time. 

We are using [mrdanadams/jekyll-thumbnailer](https://github.com/mrdanadams/jekyll-thumbnailer) but used [kevin1's modification](https://github.com/kevin1/jekyll-thumbnailer/blob/master/thumbnail.rb) to the plugin so it can accept variables and approach usefulness. With this module, thumbnails end up in art/thumbs/ when we need them in _site/art/thumbs. `jekyl serve` seems to pass these files through correctly, but for our build in netlify we needed to do the following:

**build command:** `jekyll build && cp -rf art/thumbs/ _site/art`

## HTTPS

All websites should be served over https, but github pages and many other services do not provide ssl for domains. To work around this, we are using a free Cloudflare account that provides a free shared ssl cert. To enable, we pointed our domain to the cloudflare nameservers. Then by enabling the shared ssl, cloudflare will provide a certificate and terminate on their end, proxying the request to either github pages or netify without issue. It works really well.

## License

Please note that the artwork and content in this repository is owned by Trina Reynolds and is not attached to the MIT license. The MIT license covers the Jekyll related components and customizations and is inherited from the project we forked. All content, including that in markdown files and images are owned by Trina Reynolds and all rights are reserved.

**If you like the artwork** the original pieces are available for purchase on [trina.coffee](https://trina.coffee), if you would like to know more or use this work, please discuss with her beforehand. She's very responsive and would love to help!

```
The MIT License (MIT)

Copyright (c) 2014 Filippo Oretti, Dario Andrei

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

All that said, please feel free to use any of the technical stuff in this repo. We will keep working on this theme and expect to do some refactoring soon. If there's interest, we're open to upstreaming any changes or seperating out the copyrighted content and providing this theme in a vanilla state to others. 
