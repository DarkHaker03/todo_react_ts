import CSS from 'csstype';
import { createStore } from 'effector';


export const $colors = createStore<CSS.Properties[]>([
  { backgroundColor: '#d3d3d3' },
  { backgroundColor: 'red' },
  { backgroundColor: '#212121' },
  { backgroundColor: '#000' },
  { backgroundColor: '#fff' },
  { backgroundColor: 'gold' },
  { backgroundColor: '#ccc' },
  { backgroundColor: '#333' },
  { backgroundColor: '#12FF0A' },
  { backgroundColor: '#410E67' },
  { backgroundColor: '#0510E1' },
  { backgroundColor: '#2CF7F4' },
])
