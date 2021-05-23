import { is_dev } from './util';

if (is_dev()) {
  console.log("Dev env");
} else {
  console.log("Prod env");
}
