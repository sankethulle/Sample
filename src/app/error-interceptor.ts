import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpErrorResponse} from "@angular/common/http";
import { catchError, throwIfEmpty } from "rxjs/operators";
import { throwError } from "rxjs";
import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { ErrorDialogComponent } from "./dialog/error-dialog";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'this is error message';
        if (error.error.error.message) {
          errorMessage = error.error.error.message;
        }
        this.dialog.open(ErrorDialogComponent, {data: {message: errorMessage}});
        return throwError(error);
      })
    );
  }
}
