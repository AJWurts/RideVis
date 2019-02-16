import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

df = pd.read_json("activities.json", dtype=True)
rides = df[df.workout_type == 10]
rides.hist(column=rides.select_dtypes(include=['float64']).columns)
rides.select_dtypes(include=['float64']).corr()

