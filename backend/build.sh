#!/usr/bin/env bash

# Install Java (OpenJDK 11)
apt-get update
apt-get install -y openjdk-11-jdk

# Set JAVA_HOME environment variable
set JAVA_HOME=C:\Program Files\Java\jdk-21
set PATH=%JAVA_HOME%\bin;%PATH%


# Install Python dependencies
pip install -r requirements.txt
