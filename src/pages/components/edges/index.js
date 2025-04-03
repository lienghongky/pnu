export const initialEdges = [
  { id: "a->b", source: "a", target: "b", animated: true },
  { id: "b->c", source: "b", target: "c", animated: true },
  { id: "c->d", source: "c", target: "d", animated: true },
  { id: "a->skip", source: "a", target: "skip", animated: true },
  { id: "skip->d", source: "skip", target: "d", animated: true },
] 