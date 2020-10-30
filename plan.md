# Development plan

* start with version 0, which allows random testing and ad hoc development, to see how far we get
* test javascript module system
* use versioning from start
* while we accept hex number in either case, let's standardize output to lowercase for now
* if we ever use hashed password as salt (to make it deterministic), we need to remember that bcrypt expose salt, which can be security risk