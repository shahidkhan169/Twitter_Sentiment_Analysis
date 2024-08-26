#!/usr/bin/env bash

# Install Java (OpenJDK 11)
apt-get update
apt-get install -y openjdk-11-jdk

# Set JAVA_HOME environment variable
export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH

# Install Python dependencies
pip install -r requirements.txt
