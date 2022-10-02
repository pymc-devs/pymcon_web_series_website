# Quick Start guide

1. Install Hugo
To install `HUGO` on your system, follow the instructions on the [installation guide](https://gohugo.io/getting-started/installing/).

2. Clone your forked copy of the project.
```
git clone https://github.com/<your_user_name>/pymcon_2022.git
```

3. Navigate to the website directory 📁 .
```
cd website
```

4. Start the Hugo server
```
hugo server
```

5. Build static pages
```
hugo
```

For more details on Hugo follow the [Quick Start](https://gohugo.io/getting-started/quick-start/) guide.

## Docker
Pull this image and follow the instructions in the README
https://hub.docker.com/r/klakegg/hugo/ 

```
docker run --rm -it \
  -v $(pwd):/src \
  -p 1313:1313 \
  klakegg/hugo:0.101.0 \
  server
```
