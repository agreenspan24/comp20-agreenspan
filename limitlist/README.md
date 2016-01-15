-Project title - "Limitlist"

-Problem statement
	You have a limited amount of time on the earth or in a given day, you need a playlist to match your busy schedule's needs.

-How do you solve the problem?
		-With Limitlist, users can input how long they have to listen to music, and what kind of music their in the mood for. This web app then creates set of tracks with a total duration equal to the user's input (+- 1 minute) and serves it to the user on a soundcloud player widget.
		-EX: I want to wake up within 20 minutes, please play death metal tracks for 20 minutes.

-List of features
	- Client side data persistence
		- listening history for each user
	- Server side data persistence
		- storage of userbase and analytics
	- Send emails
		- once a playlist is created a link to it will be generated and sent to the user
	- Front end framework
		- Bootstrap
	- Reporting with charts and graphs
		-analytics of durations of playlists and times at which you listen to music the most (e.g. a graph that shows the duration of your playlists vs. the time of day that you listen to that playlist)
	- Importing data
		- import tag and duration data from soundcloud api

-Data Collection
	- location
	- user information to build a profile
	- identity of each set of tracks (if a user wants to listen to the same set twice, then they needn't input their requirements for the set twice, they should be able to look at their history)

-Algorithms and special techniques
	-Algorithm that assembles different length songs into one playlist of the correct length. The algorithm prioritizes certain criteria 
	for the playlist and songs in it over others:
		1. Playlist is correct length
		2. Playlist doesn't contain any "unwanted" artists
		3. Individual songs each match as many attributes given by the user (ex: genre: hiphop, year: 2013)
		4. Once above priorities are met, prioritize songs based on user input (ex: song with most plays, most recently added songs, etc.)

-Electronic mockup: see limitlist_homepage.jpg, limitlist_sign_up.jpg, soundcloud_embed.JPG

#Comments by Ming
* Good
* Consider using, say, Facebook for login.  You don't want to write that yourself, can be a pain.
