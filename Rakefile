require 'rake'

desc 'Preview the site with Jekyll'
task :preview do
    sh "jekyll serve --watch --drafts --baseurl '' --port 3000"
end

desc 'Search site and print specific deprecation warnings'
task :check do 
    sh "jekyll doctor"
end
