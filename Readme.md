# channel-debounce

Debounce middleware for [channel](https://github.com/component/channel).

Drops repeated events that happen within a specified time interval.

```javascript
var channel = require('channel');
var debounce = require('channel-debounce');
var chan = channel();
chan.use(debounce(500));
```

## Installation

  Install with [component(1)](http://component.io):

    $ component install component/channel-debounce

## API

### drop(time)

Create a drop middleware with the specified `time`.

After an event comes through, no other events with the same name will be allowed to come through for `time` milliseconds.

**Note:** Events going from A to B have separate debounce timers from events going from B to A. One event going in one direction will not cause an event of the same name going on the other direction to be dropped.

## License

  The MIT License (MIT)

  Copyright (c) 2014 Automattic, Inc.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
