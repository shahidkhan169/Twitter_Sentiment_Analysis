#!/usr/bin/env bash

# Exit on error
set -e

# Install Java (OpenJDK 21) if needed
sudo apt-get update
sudo apt-get install -y openjdk-21-jdk

# Set JAVA_HOME environment variable
export JAVA_HOME=/usr/lib/jvm/java-21-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH

# Print Java version to verify installation
java -version

# Install Python dependencies
pip install -r requirements.txt

# Optionally, include other setup commands here
