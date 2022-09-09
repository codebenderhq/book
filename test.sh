#!/bin/sh

echo 'setting env variables'

export $(cat .env | xargs)

echo 'env variables set'