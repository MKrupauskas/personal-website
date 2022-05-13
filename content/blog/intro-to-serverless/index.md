---
title: Intro to Serverless 🚀
date: '2020-03-10T10:38:38.151Z'
description: A technology that helps you easily, and cost-effectively  deploy server-side code that scales amazingly well.
---

Recently I had an opportunity to share a small presentation in a meetup about backend development. I prepared a quick intro and demo to a technology I am really passionate about. The technology is called serverless and I believe it has some great use cases. Especially for solo developers or small companies and startups.

Firstly, I just want to say that programming is the next closest thing to having superpowers in the digital age. 🦸‍♂️ === 👨‍💻 The ability to create something useful, something that creates value to other people is pretty unmatched in my opinion.

![super power](/images/blog/superpower.jpg)
<small>Moment from the meetup, Google Student Developer Club Delft.</small>

But just coding some application up is just part of the whole process. You must also somehow share your application with the rest of the world. Hosting your product is not a trivial task at all. There are many things you must think about if you want to provide a great experience for your customers.

So how does a developer, small team, or startup get their product out to the masses? Well, let's look at some history of hosting applications on the public web.

## History of hosting 📚

### Owning a physical server

For a while, the way to share your web applications with the world was having to own a physical machine yourself. That obviously came with a ton of drawbacks.

#### Expensive 💰

Firstly buying the hardware itself is really going to leave a dent in your pockets. Not only do you have to think about the physical components you also have to worry about powering and cooling the thing. Everything adds up.

#### Scales poorly

Image your poor server getting hit by many more users at once than it can comfortably handle. How are you going to deal with so much instant traffic? Well, your little server is probably not enough at this point. You either have to order and get better components or buy another machine. Both choices are slow and expensive, and your users are going to pay for it.

#### Managing headache 🤕

You really have to spend a lot of time managing the server itself. You're almost supposed to have another full-time person dedicated to maintaining the physical machine. And when you're a small startup or a lone developer you should be spending your time improving your product and not managing the underlying infrastructure.

### Hosting in the cloud

A pretty obvious evolution from having to maintain your own servers was to outsource that to cloud providers that own and manage huge, highly optimized data centers.

All you have to worry about now is your virtual machine where you host your application. However, there are still some drawbacks to this approach.

#### Still pretty expensive

The cost calculation for your virtual machine instance is the computing resources at your disposal times the time your instance is running.

`cost = time * resources`

This means that even if _nobody_ is using your app you still have to pay up because your instance has to be running continuously. This is just a passive money burner.

#### The issue with scaling ⏳

Dynamic scaling is still not perfect with this approach. There are tools and integrations that help you solve some of the issues but there is a learning curve associated with those tools.

You can try scaling vertically by throwing more resources like memory and CPU power at the problem. Another way to scale is to add multiple smaller servers. This adds more managing problems. Now you have to think about tools that help you manage your containers like Docker and Kubernetes.

## Serverless to the rescue 🚀

Serverless - let's tackle the confusing buzzword first. We are definitely not getting rid of servers as the name might suggest. We are simply offloading the server management and scaling issues to someone else. This allows us to focus our precious time on what matters most - making our product as amazing as it can possibly be.

### The benefits of serverless

#### Massive savings 💸

You are only charged for the resources you use. If you write a function that runs for 500 milliseconds you are only charged for that time.

#### Automatic scaling 🚀

Never worry about not meeting the demand and having your servers be overloaded. Serverless is perfectly set up to meet demand. You are allocated more resources whenever you need them.

The same benefit goes both ways. Your serverless app automatically scales down whenever there is no one using your product. This means you never have to pay for idle time. ⌚

#### Focus on your app 🤖

You basically have no infrastructure to manage. Don't worry about the servers, all you need to do is just write the code. This really enables you to fully focus on your product.

Let the companies that have huge cloud farms, tons of experience and great engineering minds working 24/7 handle the infrastructure for you.

#### High availability ✨

This is just an added benefit of using serverless. Especially useful for solo developers or smaller companies that can't afford to have a dedicated responsible infrastructure engineer. You can rest assured that your cloud provider has your back.

### Example

Serverless can also be explained as a service that lets you run functions in response to some event. The general structure of a _cloud function_ (written in Node.js) looks like this.

```js
exports.myCloudFunction = function (event, context, callback) {
  // computation happens here

  callback('error', result)
}
```

The `event` parameter has all the information about why this function was called. What event caused it to be run. It's common for the event to be an HTTP request.

The `context` object contains details about the runtime the function is running in.

The `callback` is just a callback function we invoke after we did our computation and want to respond to that event or throw an error.

Now you can imagine that in a real app you might have many of these functions responsible for different parts or features of the product. It's astonishing how simple it really is, it's just a bunch of functions that are by design clearly separate in the functionality they implement.

### Serverless providers

Basically, every major cloud provider offers a serverless platform. The list of supported programming is virtually infinite. However, some of the more popular languages have better out-of-the-box support.

AWS, Azure, OpenWhisk, Google Cloud Platform, Alibaba Cloud and many many more.

## Takeaway

If there is one thing I hope you understood about the serverless ecosystem is that it most definitely is the easiest, simplest, and most cost-efficient way to deploy backend code that scales amazingly well. 🔥

[The slides I presented at the meetup.](https://slides.com/mykolaskrupauskas/deck)
