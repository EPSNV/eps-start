# eps-start

## Install

```sh
npm install eps-start --save
```

## Using

```javascript
import { makeSegment, startSegment, endSegment, segmentToString, midpointSegment } from 'eps-start';

const point1 = makePoint(1,1);
const point2 = makePoint(3,3);
const segment = makeSegment(point1, point2);
startSegment(segment); // point1
endSegment(segment); // point2
segmentToString(segment); // [(1, 1), (3, 3)]
const point3 = midpointSegment(segment); //
pointToString(point3); // (2, 2)
```

