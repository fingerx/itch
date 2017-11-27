import { Watcher } from "../watcher";
import { DB } from "../../db";

import queueDownload from "./queue-download";
import downloadWatcher from "./download-watcher";
import downloadSpeedWatcher from "./download-speed-watcher";

export default function(watcher: Watcher, db: DB) {
  queueDownload(watcher);
  downloadWatcher(watcher, db);
  downloadSpeedWatcher(watcher);
}
