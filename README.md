# eps-start


## Install

```sh
npm install eps-start --save
```

## Using

```javascript
import { makeSegment, startSegment, endSegment, segmentToString, midpointSegment } from 'eps-start';

const segment = makeSegment(point1, point2); // point1 (1,1), point2 (3,3)
startSegment(segment); // point1
endSegment(segment); // point2
segmentToString(segment); // [(1, 1), (3, 3)]
const point3 = midpointSegment(segment); // point3 (2,2)

```

