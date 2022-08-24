## An example AWS Lambda function that could be used to provide students with automated feedback

def lambda_handler(event, context):
    """Depending on the level of depth within the assumed lessons, these grading
    functions could vary drastically. For this example, I used the most basic
    approach, since this is just a demo project."""
    if event['submission'] == 'html':
        if 'name="username"' in event['code'] and 'name="password"' in event['code']:
            return {
                'feedback' : 'Great job!'
            }
        else:
            return {
                'feedback' : 'Something is missing'
            }
    elif event['submission'] == 'javascript':
        pass ## TODO
    else:
        return {
            'feedback': 'Invalid submission'
        }
