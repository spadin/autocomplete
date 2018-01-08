# Autocomplete

Learning how to use [RxJS][1] and [redux-observable][2] to do autocomplete.

## Running

Need to run two processes, the word server and the app.

```sh
$ yarn start
```

```sh
$ yarn server
```

A window will open from the `yarn start` command.

## Usage

Type a word into the text field. An ajax request is made to the word server.
The word server returns the first 30 words that start with the search term in the
text field.

This could all be done on the client side, but I wanted to learn how to make
ajax requests using RxJS and redux-observable.

RxJS makes it really easy to cancel ajax requests. Open your browser developer
tools and visit the network tab to see this in action.  Typing a lot of
gibberish quickly into the text field will show requests being made and
cancelled every time you type text. This avoids needless multiple open
connections. To see how this works look in [`src/ducks/words.js`][3] for the
[`wordEpic`][3] method.

## Resources

* [RxJS][1]
* [redux-observable][2]

[1]: https://github.com/ReactiveX/RxJS
[2]: https://redux-observable.js.org/
[3]: https://github.com/spadin/autocomplete/blob/master/src/ducks/words.js#L38-L51
