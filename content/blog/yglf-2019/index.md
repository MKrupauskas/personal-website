---
title: Recap of YGLF 2019 👨‍🏫
date: '2019-05-18T07:38:38.151Z'
description: 'Recently I attended the first frontend conference in Vilnius. You Gotta Love Frontend was an action-packed and an extremely informative…'
---

Recently I attended the first frontend conference in Vilnius.

[_You Gotta Love Frontend_](https://lithuania.yglfconf.com/) was an action-packed and an extremely informative conference overall. The speakers were awesome, it was well organized and there were way too many snacks for us to eat in between the presentations. 😋🍩

So I just wanted to share some of the highlights and the interesting bits of knowledge I acquired during the event. Just a couple fragmented and likely oversimplified ideas that stuck with me.

I've split the ideas into three main areas:

- Accessibility
- Performance
- Miscellaneous development bits

## Accessibility

The event was kicked off by [@hj_chen](https://twitter.com/hj_chen) and the talk was about the difficult problem of languages and fonts. 🌐🔠

We were reminded that we develop for the _world wide web_ and not the _wealthy western web_.

To recap just make sure you use the `lang` attribute, specify the exact language of the content and that your font families have the glyphs of the characters you are using on your site.

[@aardrian](https://twitter.com/aardrian) spoke about a concept called **_selfish accessibility_**. 😈

It's in your best interest to make your site usable in various disabling circumstances. A broken arm, a loud cafe or bright sunlight shouldn't make your site completely unusable and if you think about these factors you'll make your site accessible.

Also, accessibility is not a checklist, it's an ongoing process.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Not going to lie, <a href="https://twitter.com/aardrian?ref_src=twsrc%5Etfw">@aardrian</a>&#39;s <a href="https://twitter.com/hashtag/a11y?src=hash&amp;ref_src=twsrc%5Etfw">#a11y</a> talk at <a href="https://twitter.com/hashtag/YGLF19?src=hash&amp;ref_src=twsrc%5Etfw">#YGLF19</a> has already made me tear up. Accessibility and inclusion for tech is SO important and SO necessary and we in the XR space need to be way more aware of our responsibilities here.</p>&mdash; Liv (@misslivirose) <a href="https://twitter.com/misslivirose/status/1128983703143768065?ref_src=twsrc%5Etfw">May 16, 2019</a></blockquote>

## Performance

[@DanShappir](https://twitter.com/DanShappir) showed that server-side rendering brought a huge time to visible decrease. Not without technical challenges though, testing helped a lot in the development process.

Images make up the majority of web traffic. Therefore, it makes sense to optimize them, we have no excuse to not do so. [@dougsillars](https://twitter.com/dougsillars) showed that we have modern tools like `webp`, `<picture>` tags and lazyloading solutions to do so. 👨‍💻

Also, use `.mp4` instead of `.gif` for animations on the web.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">.<a href="https://twitter.com/dougsillars?ref_src=twsrc%5Etfw">@DougSillars</a> shows that slow loading websites are more stressful than standing at the edge of a cliff at <a href="https://twitter.com/yglf_lt?ref_src=twsrc%5Etfw">@yglf_lt</a> <a href="https://twitter.com/hashtag/yglf19?src=hash&amp;ref_src=twsrc%5Etfw">#yglf19</a> <a href="https://twitter.com/hashtag/webperf?src=hash&amp;ref_src=twsrc%5Etfw">#webperf</a> <a href="https://t.co/x8EH3irIY3">pic.twitter.com/x8EH3irIY3</a></p>&mdash; Dan Shappir (@DanShappir) <a href="https://twitter.com/DanShappir/status/1128998591060697088?ref_src=twsrc%5Etfw">May 16, 2019</a></blockquote>

## Miscellaneous development bits

You just had to see the keynote of [@smashingmag](https://twitter.com/smashingmag). We witnessed what's great and what's quite terrible in the vast world of website design. 🧙‍😲

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/smashingmag?ref_src=twsrc%5Etfw">@smashingmag</a> talking about the website of the worst hotel in the world at <a href="https://twitter.com/yglf_lt?ref_src=twsrc%5Etfw">@yglf_lt</a>, <a href="https://twitter.com/hashtag/YGLF?src=hash&amp;ref_src=twsrc%5Etfw">#YGLF</a> <a href="https://t.co/g4k50jg3hj">pic.twitter.com/g4k50jg3hj</a></p>&mdash; Tomas Miliauskas (@typeoftomas) <a href="https://twitter.com/typeoftomas/status/1129286705914306560?ref_src=twsrc%5Etfw">May 17, 2019</a></blockquote></br>

[@giltayar](https://twitter.com/giltayar) proved that testing your CSS is possible with visual regression testing.

He also coined the term **_egoprogrammophobia_**. It is the fear of your own code, but if you're suffering from it writing great tests for your code definitely helps.

Running, training and retraining machine learning prediction algorithms is possible in the browser. Are there any practical applications? Definitely! [@devdevcharlie](https://twitter.com/devdevcharlie) showed that you can totally detect _willies_ with JavaScript. 😁

JavaScript classes have some weird behavior. You can just use functions to make your life a little easier. [@soyguijarro](https://twitter.com/soyguijarro)

There are so many different things you can do with the browser like connect and use midi controllers, talk with microcontrollers (that run JavaScript) over the web Bluetooth API or even have interactive and social VR experiences. [@dashersw](https://twitter.com/dashersw) [@html5test](https://twitter.com/html5test) [@misslivirose](https://twitter.com/misslivirose)

[@sgrove](https://twitter.com/sgrove) did some fast-paced development with GraqhQL and ReasonML. This technology combo seems really powerful.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I am hearing a brilliant talk on GraqhQL and ReasonML by <a href="https://twitter.com/sgrove?ref_src=twsrc%5Etfw">@sgrove</a>, so genius my brain is stormed<a href="https://twitter.com/hashtag/yglf19?src=hash&amp;ref_src=twsrc%5Etfw">#yglf19</a> <a href="https://t.co/GYDpM65rdJ">pic.twitter.com/GYDpM65rdJ</a></p>&mdash; ᴡᴇɪ 👩🏻‍🌾 @ YGLF Vilnius 🇱🇹 (@wgao19) <a href="https://twitter.com/wgao19/status/1129323922531540993?ref_src=twsrc%5Etfw">May 17, 2019</a></blockquote></br>

[@rebekaka](https://twitter.com/rebekaka) shared some awesome tips about debugging. 🕵️‍

If you use `console.log(value)` to log variables you can improve the readability of that log simply by forming and logging an object instead of just the value `console.log({ value })`. This is especially useful when logging multiple variables.

Also, create a snippet for it if you already haven't to make your life easier.

Both chrome and firefox development tools have some great features like the accessibility and performance tabs, debugger breakpoints, local overrides, audits, and source map support. We have amazing tools and it's worth learning to use them.

[@getify](https://twitter.com/getify) spoke about how we are actually developing for people and not just users or customers. He proposed a web fidelity slider because ultimately people know what's best for them. 🤔

<blockquote class="twitter-tweet" data-conversation="none" data-lang="en"><p lang="en" dir="ltr">Users know better.<a href="https://twitter.com/hashtag/YGLF19?src=hash&amp;ref_src=twsrc%5Etfw">#YGLF19</a> <a href="https://t.co/ejK1J0HDqq">pic.twitter.com/ejK1J0HDqq</a></p>&mdash; HJ Chen @ YGLF Vilnius 🇱🇹 (@hj_chen) <a href="https://twitter.com/hj_chen/status/1129407466427572224?ref_src=twsrc%5Etfw">May 17, 2019</a></blockquote></br>

---

I also wanted to thank the organizers for the opportunity to attend and the scholarship ticket.

_YGLF 2019_ was an absolute blast and I can't wait for _YGLF 2020_! 🎉🎉
