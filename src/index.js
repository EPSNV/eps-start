import { makePoint, getX, getY, toString as pointToString } from 'hexlet-points';
import { cons, car, cdr } from 'hexlet-pairs';

export const makeSegment = (point1, point2) => cons(point1, point2);
export const startSegment = segment => car(segment);
export const endSegment = segment => cdr(segment);
export const segmentToString = (segment) => {
  const startPointString = pointToString(startSegment(segment));
  const endPointString = pointToString(endSegment(segment));
  return `[${startPointString}, ${endPointString}]`;
};

export const midpointSegment = (segment) => {
  const x = (getX(startSegment(segment)) + getX(endSegment(segment))) / 2;
  const y = (getY(startSegment(segment)) + getY(endSegment(segment))) / 2;
  return makePoint(x, y);
}


