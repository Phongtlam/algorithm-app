import * as topicConstants from "../constants/topics";
import slidingWindows from "./slidingWindows";
import twoPointers from "./twoPointers";
import intervals from "./intervals";
import treeBFS from "./treeBFS";
import treeDFS from "./treeDFS";
import treeBST from "./treeBST";
import treeTrie from "./treeTrie";
import treeGeneral from "./treeGeneral";
import subsetCombination from "./subsetCombination";
import backtracking from "./backtracking";
import binaryHeap from "./binaryHeap";
import graph from "./graph";

const topicsMap = {
  [topicConstants.slidingWindows]: slidingWindows,
  [topicConstants.twoPointers]: twoPointers,
  [topicConstants.intervals]: intervals,
  [topicConstants.treeBFS]: treeBFS,
  [topicConstants.treeDFS]: treeDFS,
  [topicConstants.treeBST]: treeBST,
  [topicConstants.treeGeneral]: treeGeneral,
  [topicConstants.treeTrie]: treeTrie,
  [topicConstants.subsetCombination]: subsetCombination,
  [topicConstants.backtracking]: backtracking,
  [topicConstants.binaryHeap]: binaryHeap,
  [topicConstants.graph]: graph,
};

export default topicsMap;
