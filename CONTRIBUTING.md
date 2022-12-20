# Contributing Guidelines

If you wish to contribute changes to the MEI website, you can edit the files directly on GitHub. The website is written in a dialect of Markdown called [kramdown](https://kramdown.gettalong.org/quickref.html).

[//]: # (In the guidelines you will see links to "Edit this section". Clicking on this will open up an editor in GitHub, where you will be able to click on the 'pencil' to edit the text of the section.)

When you are finished, you can then “Propose a file change”, where you can write a brief summary of your changes and their motivations, and then “Create a Pull Request”, which will alert the MEI Technical Team of your proposed change. If there are any questions or problems with your suggested change, a discussion can happen on the Pull Request, and then it will be merged into the website.

In some cases you will see special markup that will create automatic contents. If you need help with this Markdown, the Technical Team will be happy to help.

For complex contributions, you may wish to get the website running on your local machine, and submit a larger Pull Request. This will be explained in the next section.

## Editing the website locally

If you wish to contribute significant changes, you will likely want to checkout the code from this repository and work on it locally. To do so you will need to install Jekyll, which requires Ruby. This guide will assume you have a functioning Ruby environment, with the `gem` and `bundle` commands available. If you do not, please follow [these instructions](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll) on getting these set up.

### Step 1: Fork the website

You should fork the website into your own account using the “Fork” button on GitHub. This will make a copy of the music-encoding.github.io repository which you can edit.

### Step 2: Clone to local machine

In order to work with the repo offline you neet to clone the code to your local machine, e.g. by clicking the green “Code” button at the top and following one of the corresponding instructions.

### Step 2: Create a new branch

Create a new branch for your changes on your local Git repository. You should make it a descriptive name, like ‘feature_new-project’, ‘fix_broken-links’ or similar.

### Step 3: Build and serve the website locally

For properly reviewing any changes made to your local copy of the MEI website in your browser, you need Jekyll to build and serve the page on your local machine. There are two recommended options for doing this:

a. Run Jekyll on your machine natively
b. Run Jekyll in a Docker container

#### Step 3a: Run Jekyll on your machine natively

To install and run Jekyll natively on your machine, please follow these steps:

1. Install Jekyll

    Run `bundle install` in the root directory of your local clone of this repository. This will install all of the requirements for running the site locally.

    Windows users should check out this step-by-step guide to setting up Jekyll on Windows: [https://jekyll-windows.juthilo.com/](https://jekyll-windows.juthilo.com/)

2. Run the Jekyll server

    You can run the Jekyll service locally with `bundle exec jekyll serve --baseurl=""`. This will compile the site and start serving the content locally. Since compiling can take a while, you can add the option `-V` to get a more verbose output and information about the running compilation steps. Once it's ready, you can open your browser and visit `http://localhost:4000` to see your local version of the website.

#### Step 3b: Run Jekyll in a Docker container

To avoid installing Jekyll natively and to assure it comes with all the necessary dependencies, you can run it in a preconfigured container image. The publishers of Jekyll offer a corresponding Docker image for such purposes. To run it, please follow these instructions:

1. Install Docker

    If not already installed on your machine, download and install Docker from [https://www.docker.com/](https://www.docker.com/).

2. Run Jekyll with Docker

    Make sure to start docker before running the following command in the root directory of your local clone of this repository:

    ```bash
    docker run --rm -it --volume="$PWD:/srv/jekyll:Z" --publish 4000:4000 jekyll/jekyll jekyll serve
    ```

    Detailed explanations of this command can be found in the [Docker Command-line reference](https://docs.docker.com/engine/reference/run/) but here’s a concise explanation:
  
    | Command Particle | Description                                                                              |
    |:-----------------|:-----------------------------------------------------------------------------------------|
    | --rm             | automatically clean up the container and remove the file system when the container exits |
    | --it             | keeps the shell open                                                                     |
    | --volume         | mount a folder from the host as volume in container, here the current working directory (`$PWD`) gets mounted into `/srv/jekyll` in the docker container |
    | --publish        | specifies the ports the container publishes                                              |
    | jekyll/jekyll    | the name of the Dockerimage                                                              |
    | jekyll serve     | execute jekyll to serve the website                                                      |


    This will compile the site and start serving the content locally. Information on the compilation process will be output to the command shell. Once it's ready, you can open your browser and visit `http://localhost:4000` to see your local version of the website.

### Step 5. Make your changes and commit

You should now be able to make your changes. Try to keep your commits as ‘atomic’ as possible; that is, commit only the changes necessary for a given set of functionality. Avoid large commits that change a lot of things, as this makes it harder to review your changes for unintended side effects and potential problems.

### Step 6. Propose a Pull Request

Once all of your changes have been committed and pushed to your fork, you can propose a change to the main music-encoding.github.io repository by opening a [Pull Request](https://help.github.com/articles/about-pull-requests/). This will alert the Technical Team that you have a change you wish to contribute. The 'Technical Team will review your changes and may ask for modifications or clarification in the Pull Request. Once your changes have been reviewed and accepted, they will be merged in and will then be available on the website.

### Step 7. Delete your local branch (optional)

When your pull request has been accepted, it is then safe to delete the branch that you created in Step 2. This will ensure you do not have older branches around that get progressively outdated.
