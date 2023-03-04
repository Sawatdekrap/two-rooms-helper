#!/bin/bash

# OLD DIMENSIONS AND PARAMETERS
# CARD_DIMENSIONS="1330x2050"
# -density 600
# "+375+375" "+1860+375" "+3345+375" "+4825+375" "+375+2675" "+1860+2675" "+3345+2675" "+4825+2675"

# Arg check
if [ $# != 2 ]
then
    echo $#
    echo "Usage: $0 INPUT_DIR OUTPUT_DIR"
    exit 1
fi

INPUT_DIR=$1
OUTPUT_DIR=$2
TMP_DIR="/tmp/two-rooms-helper"

CARD_DIMENSIONS="335x514"

rm -f $OUTPUT_DIR/*
mkdir -p $OUTPUT_DIR
mkdir -p $TMP_DIR

PDF_FILES=`ls $INPUT_DIR/*.pdf`
CURR_CARD=0

for PDF_FILE in $PDF_FILES
do
    TMP_NAME=`echo "$PDF_FILE" | sed "s/.*\///" | sed "s/\.pdf/.jpg/"`
    TMP_FILE="$TMP_DIR/$TMP_NAME"
    convert -density 150 -trim $PDF_FILE -quality 100 -flatten -sharpen 0x1.0 $TMP_FILE

    for OFFSETS in "+93+93" "+464+93" "+835+93" "+1205+93" "+93+668" "+464+668" "+835+668" "+1205+668"
    do
        OUT_FILE="$OUTPUT_DIR/$CURR_CARD.jpg"
        convert "$TMP_FILE" -crop "$CARD_DIMENSIONS$OFFSETS" "$OUT_FILE"
        CURR_CARD=`expr $CURR_CARD + 1`
        echo -n .
    done

    rm $TMP_FILE
done

CURR_CARD=0
for NAME in `cat filename_mapping.txt | cut -f 2`
do
    ORIGINAL_FILENAME="$OUTPUT_DIR/$CURR_CARD.jpg"
    CARD_FILENAME="$OUTPUT_DIR/$NAME.jpg"
    mv $ORIGINAL_FILENAME $CARD_FILENAME
    CURR_CARD=`expr $CURR_CARD + 1`
done

echo
