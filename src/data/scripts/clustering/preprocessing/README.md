## Formatting Step

```
python json_to_files_formatter.py --output_dir <output_dir_here> --input_filename <input_filename_here>
```

The above code creates raw text files in the `output_dir` with each article having its own file and file name corresponding to the article headline. The `output_dir` used here should be used as the `input_dir` when running the SmartBook clustering code.

## Clustering Step

- Set the input and output dir paths:

```
export INPUT_DIR_PATH=<path_to_input_dir>
export OUTPUT_DIR_PATH=<path_to_output_dir>
```

- Run the clustering code with pointing to the input and output directory paths

```
python run.py --input_dir ${INPUT_DIR_PATH} --output_dir ${OUTPUT_DIR_PATH} --output_filename <output_filename_here_with_dot_json>
```

The code generates a file `output_filename_here.json` in the output directory: `output_dir`
